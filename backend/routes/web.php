<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\GoogleController;

Route::get('/', function () {
    return view('welcome');
});

// Route::get('auth/redirect/google', [GoogleController::class, 'redirect']);
// Route::get('auth/callback/google', [GoogleController::class, 'callback']);
