<?php

namespace App\Http\Controllers;

use App\Models\Representante;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class RepresentanteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $representantes = Representante::with(['estudiantes' => function($query){
            $query->select('id', 'nombres', 'apellidos', 'documento_identidad', 'telefono');
        }])->paginate(15);
        return response()->json($representantes);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombres' => 'required|string|max:100',
            'apellidos' => 'required|string|max:100',
            'tipo_documento' => ['required','string', Rule::in(['CC', 'TI', 'CE', 'Pasaporte'])],
            'documento_identidad' => 'required|string|unique:representantes,documento_identidad|max:50',
            'telefono' => 'nullable|string|max:20',
            'email' => 'nullable|string|email|unique:representantes,email|max:100',
            'rut' => 'nullable|string|max:100',
        ], [
            'nombres.required' => 'El campo nombres es obligatorio.',
            'nombres.string' => 'El campo nombres debe ser una cadena de texto.',

            'apellidos.required' => 'El campo apellidos es obligatorio.',
            'apellidos.string' => 'El campo apellidos debe ser una cadena de texto.',

            'tipo_documento.required' => 'El tipo de documento es obligatorio.',
            'tipo_documento.string' => 'El tipo de documento debe ser una cadena de texto.',
            'tipo_documento.in' => 'El tipo de documento seleccionado no es válido. Valores permitidos: CC, TI, CE, Pasaporte.',

            'documento_identidad.required' => 'El documento de identidad es obligatorio.',
            'documento_identidad.string' => 'El documento de identidad debe ser una cadena de texto.',
            'documento_identidad.unique' => 'Este documento de identidad ya ha sido registrado.',

            'email.string' => 'El correo debe ser una cadena de texto.',
            'email.email' => 'El formato del correo electrónico no es válido.',
            'email.unique' => 'Este correo electrónico ya ha sido registrado.',

            'telefono.string' => 'El teléfono debe ser una cadena de texto.',
            'rut.string' => 'El RUT debe ser una cadena de texto.',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Errores de validación.',
                'errors' => $validator->errors()
            ], 422);
        }
        $dataForCreation = $validator->validated();

        try {
            $representante = Representante::create($dataForCreation);
            return response()->json([
                'message' => 'Representante registrado exitosamente.',
                'data' => $representante
            ], 201);
        } catch (\Exception $e) {
            Log::error('Error al registrar el representante: ' . $e->getMessage() . ' StackTrace: ' . $e->getTraceAsString());
            return response()->json([
                'message' => 'Hubo un error en el servidor al procesar la solicitud. Por favor, inténtalo más tarde.'
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $representanteId)
    {
        try {
            $representante = Representante::with(['estudiantes' => function ($query) {
                $query->select('id', 'nombres', 'apellidos', 'documento_identidad', 'telefono');
            }])->findOrFail($representanteId);
            return response()->json($representante);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'Representante no encontrado.'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $representanteId)
    {
        try {
            $representante = Representante::findOrFail($representanteId);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'Representante no encontrado'], 404);
        }

         $validator = Validator::make($request->all(), [
            'nombres' => 'sometimes|required|string|max:100',
            'apellidos' => 'sometimes|required|string|max:100',
            'tipo_documento' => ['sometimes','required','string', Rule::in(['CC', 'TI', 'CE', 'Pasaporte'])],
            'documento_identidad' => ['sometimes','required','string','max:50', Rule::unique('representantes', 'documento_identidad')->ignore($representante->id)],
            'telefono' => 'sometimes|nullable|string|max:20',
            'email' => ['sometimes','nullable','string','email','max:100', Rule::unique('representantes', 'email')->ignore($representante->id)],
            'rut' => 'sometimes|nullable|string|max:100'
        ], [
            'nombres.required' => 'El campo nombres es obligatorio.',
            'nombres.string' => 'El campo nombres debe ser una cadena de texto.',

            'apellidos.required' => 'El campo apellidos es obligatorio.',
            'apellidos.string' => 'El campo apellidos debe ser una cadena de texto.',

            'tipo_documento.required' => 'El tipo de documento es obligatorio.',
            'tipo_documento.string' => 'El tipo de documento debe ser una cadena de texto.',
            'tipo_documento.in' => 'El tipo de documento seleccionado no es válido. Valores permitidos: CC, TI, CE, Pasaporte.',

            'documento_identidad.required' => 'El documento de identidad es obligatorio.',
            'documento_identidad.string' => 'El documento de identidad debe ser una cadena de texto.',
            'documento_identidad.unique' => 'Este documento de identidad ya ha sido registrado.',

            'email.string' => 'El correo debe ser una cadena de texto.',
            'email.email' => 'El formato del correo electrónico no es válido.',
            'email.unique' => 'Este correo electrónico ya ha sido registrado.',

            'telefono.string' => 'El teléfono debe ser una cadena de texto.',
            'rut.string' => 'El RUT debe ser una cadena de texto.',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Errores de validación.',
                'errors' => $validator->errors()
            ], 422);
        }

        $validatedData = $validator->validated();

        try {
            $representante->update($validatedData);
            $representante->refresh();
            return response()->json([
                'message' => 'Representante actualizado exitosamente',
                'data' => $representante
            ], 200);

        } catch (\Exception $e) {
            Log::error('Error al actualizar el representante: ' . $e->getMessage() . ' StackTrace: ' . $e->getTraceAsString());
            return response()->json(['message'=> 'Hubo un error al actualizar el representante'],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $representanteId)
    {
        try {
            $representante = Representante::findOrFail($representanteId);
        } catch (ModelNotFoundException $e) {
            return response()->json(['message' => 'Representante no encontrado'], 404);
        }

        try {
            $representante->delete();
            return response()->json([
                'message' => 'Representante eliminado exitosamente'
            ], 200);
        } catch (\Exception $e) {
            Log::error('Error al eliminar el representante: ' . $e->getMessage() . 'StackTrace: ' . $e->getTraceAsString());
            return response()->json([
                'message' => 'Hubo un error al eliminar el representante'
            ], 500);
        }
    }
}
