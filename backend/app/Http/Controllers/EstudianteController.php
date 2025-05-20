<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Estudiante;

class EstudianteController extends Controller
{

    public function create()
    {
        return view('registrar');
        // return "Pagina de registro";
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $estudiantes = Estudiante::with(['representante', 'sede', 'horario'])->paginate(15);
        return response()->json($estudiantes);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $estudiante = Estudiante::with(['representante', 'sede', 'horario'])->findOrFail($id);
            return response()->json($estudiante);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'Estudiante no encontrado.'], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        try {
            $estudiante = Estudiante::with(['representante', 'sede', 'horario'])->findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
