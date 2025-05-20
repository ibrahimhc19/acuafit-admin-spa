<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\GoogleController;
use App\Models\Estudiante;
use App\Http\Controllers\EstudianteController;

Route::get('/', function () {
    return view('welcome');
});
// Route::get('/exito', function () {
//     return view('success');
// });

// Route::get('auth/redirect/google', [GoogleController::class, 'redirect']);
// Route::get('auth/callback/google', [GoogleController::class, 'callback']);

Route::get('/inscripciones/crear', [EstudianteController::class, 'create'])->name('inscripciones.create');
