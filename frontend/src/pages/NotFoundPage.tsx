export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#352c6f] to-[#6e59f7] text-white text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! Página no encontrada.</p>
      <a
        href="/students"
        className="bg-white text-[#6e59f7] px-6 py-2 rounded font-semibold hover:bg-gray-100 transition"
      >
        Volver al inicio
      </a>
    </div>
  );
}
