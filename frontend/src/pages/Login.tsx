/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  interface IFormInput {
    email: string;
    password: string;
  }

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>();

  const [apiError, setApiError] = useState("");

  const submit = async (data: IFormInput) => {
    setApiError("");

    try {
      const apiUrl = import.meta.env.VITE_APP_API_URL;
      const response = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(
          responseData.message ||
            `Error ${response.status}: ${response.statusText}`
        );
      }
      // --- Éxito ---
      // Guarda el token (considera alternativas más seguras si es necesario)
      localStorage.setItem("authToken", responseData.token);
      // console.log("Login exitoso:", responseData);
      navigate("/dashboard", {
        replace: true,
      });
    } catch (error:unknown) {
      // Captura errores de red o los errores que lanzamos arriba
      const errorMessage = 'Error al iniciar sesión. Inténtalo de nuevo.';
      setApiError(
        errorMessage
      );
      console.error("Error de login:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#352c6f] to-[#6e59f7] p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Acuafit</h1>
          <p className="text-sm text-gray-500">Inicia sesión para continuar</p>
        </div>

        <form onSubmit={handleSubmit(submit)} className="space-y-4">
            {apiError && <p style={{ color: 'red' }}>{apiError}</p>}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#6e59f7] text-gray-700"
              placeholder="ejemplo@correo.com"
              {...register("email", { required: "El email es obligatorio" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p style={{ color: 'red', fontSize: '0.8em' }}>{errors.email.message}</p>}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#6e59f7] text-gray-700"
              placeholder="••••••••"
              {...register("password", { required: "La contraseña es obligatoria" })}
            />
            {errors.password && <p style={{ color: 'red', fontSize: '0.8em' }}>{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full text-white rounded-xl py-2 transition-colors duration-300"
            style={{ backgroundColor: "#6e59f7" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#352c6f")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#6e59f7")
            }
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="text-center text-sm text-gray-500">
          ¿Olvidaste tu contraseña?
        </div>
      </div>
    </div>
  );
}
