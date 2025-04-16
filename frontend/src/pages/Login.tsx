// src/pages/Login.jsx

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#352c6f] to-[#6e59f7] p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Acuafit</h1>
          <p className="text-sm text-gray-500">Inicia sesión para continuar</p>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#6e59f7]"
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#6e59f7]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full text-white rounded-xl py-2 transition-colors duration-300"
            style={{ backgroundColor: '#6e59f7' }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#352c6f')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#6e59f7')}
          >
            Iniciar sesión
          </button>
        </form>

        <div className="text-center text-sm text-gray-500">
          ¿Olvidaste tu contraseña?
        </div>
      </div>
    </div>
  );
}
