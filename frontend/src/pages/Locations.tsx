interface EntityLocation {
  id: number;
  nombre: string;
  direccion: string;
}

interface EntityLocationTableProps {
  data?: EntityLocation[];
  tableName?: string;
}

function LocationsPage({ data, tableName = "Sedes" }: EntityLocationTableProps) {
  const defaultData: EntityLocation[] = [
    { id: 1, nombre: 'Sede Principal', direccion: 'Calle Falsa 123, Ciudad Capital' },
    { id: 2, nombre: 'Sucursal Norte', direccion: 'Avenida Siempreviva 742, Distrito Norte' },
    { id: 3, nombre: 'Oficina Central', direccion: 'Plaza Mayor 1, Centro Histórico' },
    { id: 4, nombre: 'Almacén Logístico', direccion: 'Kilómetro 5 Vía Industrial, Zona Franca' },
  ];

  const displayData: EntityLocation[] = data && data.length > 0 ? data : defaultData;

  return (
    <div className="container mx-auto p-2 sm:p-4">
      <h1 className="text-2xl font-semibold mb-4 text-gray-700">{tableName}</h1>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-[#352c6f] text-white">
            <tr>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm w-1/6_">ID</th> {/* Ancho sugerido, ajustable */}
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm w-2/6_">Nombre</th> {/* Ancho sugerido */}
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm w-3/6_">Dirección</th> {/* Ancho sugerido */}
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm w-3/6_">Acciones</th> {/* Ancho sugerido */}
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {displayData.map((item: EntityLocation) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-4 text-xs sm:text-sm">{item.id}</td>
                <td className="py-3 px-4 text-xs sm:text-sm">{item.nombre}</td>
                <td className="py-3 px-4 text-xs sm:text-sm">{item.direccion}</td>
                <td className="py-3 px-4 text-xs sm:text-sm">📄✏️🗑️</td>
              </tr>
            ))}
            {displayData.length === 0 && (
              <tr>
                <td
                  colSpan={3} // 3 columnas: ID, Nombre, Dirección
                  className="py-4 px-4 text-center text-gray-500"
                >
                  No hay datos para mostrar.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LocationsPage;
