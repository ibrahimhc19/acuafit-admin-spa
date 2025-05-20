<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\EstudianteController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth:sanctum');
Route::get('/estudiantes', [EstudianteController::class,'index'])->middleware('auth:sanctum');
Route::get('/estudiante/{id}', [EstudianteController::class,'show'])->middleware('auth:sanctum');
