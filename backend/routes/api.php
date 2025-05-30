<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\Api\LoginController;
// use App\Http\Controllers\EstudianteController;
// use App\Http\Controllers\PagoController;
use App\Http\Controllers\SedeController;
use App\Http\Controllers\HorarioController;
use App\Http\Controllers\RepresentanteController;

// Sedes
Route::post('/sede', [SedeController::class, 'store'])->middleware('auth:sanctum');
Route::get('/sedes', [SedeController::class, 'index'])->middleware('auth:sanctum');
Route::get('/sede/{id}', [SedeController::class, 'show'])->middleware('auth:sanctum');
Route::patch('/sede/{id}', [SedeController::class, 'update'])->middleware('auth:sanctum');
Route::delete('/sede/{id}', [SedeController::class, 'destroy'])->middleware('auth:sanctum');

// Horarios
Route::post('/horario', [HorarioController::class, 'store'])->middleware('auth:sanctum');
Route::get('/horarios', [HorarioController::class, 'index'])->middleware('auth:sanctum');
Route::get('/horario/{id}', [HorarioController::class, 'show'])->middleware('auth:sanctum');
Route::patch('/horario/{id}', [HorarioController::class, 'update'])->middleware('auth:sanctum');
Route::delete('/horario/{id}', [HorarioController::class, 'destroy'])->middleware('auth:sanctum');

// Representantes
Route::post('/representante', [RepresentanteController::class, 'store'])->middleware('auth:sanctum');
Route::get('/representantes', [RepresentanteController::class, 'index'])->middleware('auth:sanctum');
Route::get('/representante/{id}', [RepresentanteController::class, 'show'])->middleware('auth:sanctum');
Route::patch('/representante/{id}', [RepresentanteController::class, 'update'])->middleware('auth:sanctum');
Route::delete('/representante/{id}', [RepresentanteController::class, 'destroy'])->middleware('auth:sanctum');
