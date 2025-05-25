/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

interface IFormInput {
  email: string;
  password: string;
}

export default function Login() {
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
      const apiUrl = import.meta.env.VITE_APP_API_URL ?? "";

      await axios.get(`${apiUrl}sanctum/csrf-cookie`, {});

      const response = await axios.post(`${apiUrl}login`, data, {
        headers: {
          Accept: "application/json",
        },
      });
      console.log(response);

      navigate("/dashboard", { replace: true });
    } catch (error: unknown) {
      let specificErrorMessage = "Error al iniciar sesión. Inténtalo de nuevo.";

      if (axios.isAxiosError(error) && error.response) {
        specificErrorMessage =
          error.response.data.message ||
          `Error ${error.response.status}: ${error.response.statusText}`;
      }
      setApiError(specificErrorMessage);

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
          {apiError && (
            <div className="bg-red-100 text-red-700 p-2 rounded-xl text-sm">
              {"Error al iniciar sesión, intente nuevamente."}
            </div>
          )}

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
              aria-describedby="email-error"
            />
            {errors.email && (
              <p id="email-error" className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
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
              {...register("password", {
                required: "La contraseña es obligatoria",
              })}
              aria-invalid={errors.password ? "true" : "false"}
              aria-describedby="password-error"
            />
            {errors.password && (
              <p id="password-error" className="text-red-600 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#6e59f7] hover:bg-[#352c6f] text-white rounded-xl py-2 transition-colors duration-300 disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Iniciando sesión..." : "Iniciar Sesión"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-500">
          ¿Olvidaste tu contraseña?
        </div>
      </div>
    </div>
  );
}
