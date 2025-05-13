<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Credenciales inválidas'
            ], Response::HTTP_UNAUTHORIZED);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        $cookie = cookie(
            'auth_token',
            $token,
            config('sanctum.expiration', 60 * 24 * 7),
            config('sanctum.path', '/'),
            config('sanctum.domain', null),
            config('session.secure'),
            true,
            false,
            config('session.same_site', 'lax')
        );

        return response()->json([
            'message' => 'Login exitoso',
            'user' => $user
        ], Response::HTTP_OK)->withCookie($cookie);
    }
    public function logout(Request $request)
    {

        $user = $request->user();

        if ($user) {
             $user->currentAccessToken()->delete();
            // $user->tokens()->delete();

        }

        $cookie = Cookie::forget('auth_token', config('sanctum.path', '/'), config('sanctum.domain', null));

        return response()->json([
            'message' => 'Sesión cerrada exitosamente'
        ], Response::HTTP_OK)->withCookie($cookie);
    }
}
