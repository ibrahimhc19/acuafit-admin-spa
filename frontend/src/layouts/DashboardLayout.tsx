import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#352c6f] text-white transform transition-transform duration-300 lg:relative lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-[#6e59f7]">
          <span className="text-xl font-bold">Acuafit</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white lg:hidden"
          >
            ✖
          </button>
        </div>

        <nav className="p-4 space-y-2 text-sm">
          <NavLink
            to="/students"
            className="block px-3 py-2 rounded hover:bg-[#6e59f7]"
          >
            👥 Estudiantes
          </NavLink>
          <NavLink
            to="/locations"
            className="block px-3 py-2 rounded hover:bg-[#6e59f7]"
          >
            🏢 Sedes
          </NavLink>
          <NavLink
            to="/accounting"
            className="block px-3 py-2 rounded hover:bg-[#6e59f7]"
          >
            💰 Contabilidad
          </NavLink>
        </nav>

        <div className="mt-auto p-4 border-t border-[#6e59f7]">
          <button className="w-full px-3 py-2 text-sm bg-[#6e59f7] hover:bg-[#4b3ca6] rounded">
            🔒 Logout
          </button>
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
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Top bar */}
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
          <button
            onClick={() => setIsOpen(true)}
            className="text-[#352c6f] lg:hidden"
          >
            ☰
          </button>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-700">Hola, Ibrahim</span>
            <img
              src="https://ui-avatars.com/api/?name=Ibrahim"
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
