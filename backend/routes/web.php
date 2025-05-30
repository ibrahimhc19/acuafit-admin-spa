<?php

use Illuminate\Support\Facades\Route;
use App\Models\Estudiante;
use Illuminate\Http\Request;
use App\Http\Controllers\EstudianteController;
use App\Http\Controllers\PagoController;
use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\Auth\LoginController;


Route::get('/', function () {
    return view('welcome');
});
// Autenticación
Route::post('/login', [LoginController::class, 'login']);
Route::get('/user', [LoginController::class, 'user'])->middleware('auth:sanctum');
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth:sanctum');
Route::get('auth/redirect/google', [GoogleController::class, 'redirect']);
Route::get('auth/callback/google', [GoogleController::class, 'callback']);

// Inscripciones y otros
Route::get('/registrar', [EstudianteController::class, 'create'])->name('inscripciones.create');
Route::get('/exito', function () {
    return view('success');
});

// Estudiantes
Route::post('/estudiante', [EstudianteController::class, 'store'])->middleware('auth:sanctum');
Route::get('/estudiantes', [EstudianteController::class, 'index'])->middleware('auth:sanctum');
Route::get('/estudiante/{id}', [EstudianteController::class, 'show'])->middleware('auth:sanctum');
Route::patch('/estudiante/{id}', [EstudianteController::class, 'update'])->middleware('auth:sanctum');
Route::delete('/estudiante/{id}', [EstudianteController::class, 'destroy'])->middleware('auth:sanctum');

// Pagos
Route::post('/pago', [PagoController::class, 'store'])->middleware('auth:sanctum');
Route::get('/pagos', [PagoController::class, 'index'])->middleware('auth:sanctum');
Route::get('/pago/{id}', [PagoController::class, 'show'])->middleware('auth:sanctum');
Route::patch('/pago/{id}', [PagoController::class, 'update'])->middleware('auth:sanctum');
Route::delete('/pago/{id}', [PagoController::class, 'destroy'])->middleware('auth:sanctum');

// Sedes
// Route::post('/sede', [SedeController::class, 'store'])->middleware('auth:sanctum');
// Route::get('/sedes', [SedeController::class, 'index'])->middleware('auth:sanctum');
// Route::get('/sede/{id}', [SedeController::class, 'show'])->middleware('auth:sanctum');
// Route::patch('/sede/{id}', [SedeController::class, 'update'])->middleware('auth:sanctum');
// Route::delete('/sede/{id}', [SedeController::class, 'destroy'])->middleware('auth:sanctum');

// Horarios
// Route::post('/horario', [HorarioController::class, 'store'])->middleware('auth:sanctum');
// Route::get('/horarios', [HorarioController::class, 'index'])->middleware('auth:sanctum');
// Route::get('/horario/{id}', [HorarioController::class, 'show'])->middleware('auth:sanctum');
// Route::patch('/horario/{id}', [HorarioController::class, 'update'])->middleware('auth:sanctum');
// Route::delete('/horario/{id}', [HorarioController::class, 'destroy'])->middleware('auth:sanctum');

// Representantes
// Route::post('/representante', [RepresentanteController::class, 'store'])->middleware('auth:sanctum');
// Route::get('/representantes', [RepresentanteController::class, 'index'])->middleware('auth:sanctum');
// Route::get('/representante/{id}', [RepresentanteController::class, 'show'])->middleware('auth:sanctum');
// Route::patch('/representante/{id}', [RepresentanteController::class, 'update'])->middleware('auth:sanctum');
// Route::delete('/representante/{id}', [RepresentanteController::class, 'destroy'])->middleware('auth:sanctum');
