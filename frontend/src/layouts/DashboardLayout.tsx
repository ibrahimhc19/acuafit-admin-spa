import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);

  const [apiError, setApiError] = useState<string>("");
  const navigate = useNavigate();

  const usuario = "Ciudadano promedio";

  const handleLogout = async () => {
    setApiError("");

    try {
      const apiUrl = import.meta.env.VITE_APP_API_URL ?? "";

      const user = await axios.get(`${apiUrl}user`, {
        // withCredentials: true,
        // withXSRFToken: true,
      });

      console.log(user);
      // return user.data;

      await axios.get(`${apiUrl}sanctum/csrf-cookie`, {
        // withCredentials: true,
      });

      const response = await axios.post(`${apiUrl}logout`, {
        // withCredentials: true,
        // withXSRFToken: true,
        headers: {
          Accept: "application/json",
        },
      });
      console.log(response.data.message);

      // let responseData = {};
      // const contentType = response.headers.get("content-type");
      // if (contentType && contentType.includes("application/json")) {
      //   responseData = await response.json();
      // }

      // if (!response.ok) {
      //   const message =
      //     (responseData as { message?: string })?.message ||
      //     `Error ${response.status}: ${response.statusText}`;
      //   throw new Error(message);
      // }

      console.log("Logout exitoso");

      navigate("/login", {
        replace: true,
      });
    } catch (error: unknown) {
      let specificErrorMessage = "Error al cerrar sesión. Inténtalo de nuevo.";

      if (error instanceof Error) {
        specificErrorMessage = error.message;
      }

      setApiError(specificErrorMessage);
      console.error("Error de logout:", error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#352c6f] text-white transform transition-transform duration-300 lg:relative lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-[#6e59f7]">
          <span className="px-4 text-xl font-bold">Acuafit</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white lg:hidden"
          >
            ✖
          </button>
        </div>

        <nav className="p-4 space-y-2 text-sm">
          <NavLink
            to="/estudiantes"
            className="block px-3 py-2 rounded hover:bg-[#6e59f7]"
          >
            Estudiantes
          </NavLink>
          <NavLink
            to="/representantes"
            className="block px-3 py-2 rounded hover:bg-[#6e59f7]"
          >
            Representantes
          </NavLink>
          <NavLink
            to="/sedes"
            className="block px-3 py-2 rounded hover:bg-[#6e59f7]"
          >
            Sedes
          </NavLink>
          <NavLink
            to="/horarios"
            className="block px-3 py-2 rounded hover:bg-[#6e59f7]"
          >
            Horarios
          </NavLink>
          <NavLink
            to="/pagos"
            className="block px-3 py-2 rounded hover:bg-[#6e59f7]"
          >
            Pagos
          </NavLink>
          <NavLink
            to="/contabilidad"
            className="block px-3 py-2 rounded hover:bg-[#6e59f7]"
          >
            Contabilidad
          </NavLink>
        </nav>

        <div className="mt-auto p-4 border-t border-[#6e59f7]">
          <button
            className="w-full px-3 py-2 text-sm bg-[#6e59f7] hover:bg-[#4b3ca6] rounded"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
          {apiError && (
            <div className="w-full px-3 py-2 my-4 text-sm bg-[#6e59f7] rounded">
              {"Error al cerrar sesión, intente nuevamente."}
            </div>
          )}
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
          <button
            onClick={() => setIsOpen(true)}
            className="text-[#352c6f] lg:hidden"
          >
            ☰
          </button>
          <div className="items-center space-x-4 contents">
            <span className="text-sm text-gray-700">Hola, {usuario}</span>
            <img
              src={`https://ui-avatars.com/api/?name=${usuario}`}
              alt="Avatar"
              className="w-8 h-8 rounded-full border"
            />
          </div>
        </header>
        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
