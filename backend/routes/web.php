<?php

use Illuminate\Support\Facades\Route;
use App\Models\Estudiante;
use Illuminate\Http\Request;
use App\Http\Controllers\EstudianteController;
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
// Datos
Route::get('/estudiantes', [EstudianteController::class, 'index'])->middleware("auth:sanctum");
Route::get('/estudiante/{id}', [EstudianteController::class, 'show'])->middleware('auth:sanctum');

// Inscripciones y otros
Route::get('/inscripciones/crear', [EstudianteController::class, 'create'])->name('inscripciones.create');
Route::get('/exito', function () {
    return view('success');
});
