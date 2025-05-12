interface Persona {
  id: number;
  nombres: string;
  apellidos: string;
  documento_identidad: string;
  telefono?: string | null;
  email?: string | null;
}

interface DataTableProps {
  data?: Persona[];
}

const Parents = ({ data }: DataTableProps) => {
  const defaultData: Persona[] = [
    { id: 1, nombres: 'Ana María', apellidos: 'Pérez Gómez', documento_identidad: '1023456789', telefono: '3001234567', email: 'ana.perez@example.com' },
    { id: 2, nombres: 'Carlos Alberto', apellidos: 'Rodríguez López', documento_identidad: '1098765432', telefono: '3109876543', email: 'carlos.rodriguez@example.com' },
    { id: 3, nombres: 'Luisa Fernanda', apellidos: 'Martínez Casas', documento_identidad: '1012345678', telefono: '3201237890', email: 'luisa.martinez@example.com' },
    { id: 4, nombres: 'Jorge Luis', apellidos: 'García Silva', documento_identidad: '1056789012', telefono: null, email: 'jorge.garcia@example.com' },
    { id: 5, nombres: 'Sofia', apellidos: 'Hernández Díaz', documento_identidad: '1033445566', telefono: '3156677889', email: 'sofia.hernandez@example.com' },
  ];
  const displayData: Persona[] = data && data.length > 0 ? data : defaultData;
  
  return (
    <div className="container mx-auto p-2 sm:p-4">
      <h1 className="text-2xl font-semibold mb-4 text-gray-700">Representantes</h1>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-[#352c6f] text-white">
            <tr>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm hidden xl:table-cell">ID</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm">Nombres</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm">Apellidos</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm hidden sm:table-cell">Documento Identidad</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm hidden md:table-cell">Teléfono</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm hidden lg:table-cell">Email</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm hidden lg:table-cell">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {displayData.map((row: Persona, index: number) => (
              <tr 
                key={row.id || index} // Usar row.id si está disponible y es único, sino el índice como fallback
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-4 text-xs sm:text-sm hidden xl:table-cell">{row.id}</td>
                <td className="py-3 px-4 text-xs sm:text-sm">{row.nombres}</td>
                <td className="py-3 px-4 text-xs sm:text-sm">{row.apellidos}</td>
                <td className="py-3 px-4 text-xs sm:text-sm hidden sm:table-cell">{row.documento_identidad}</td>
                <td className="py-3 px-4 text-xs sm:text-sm hidden md:table-cell">{row.telefono || '-'}</td> {/* Mostrar '-' si el teléfono es null/undefined */}
                <td className="py-3 px-4 text-xs sm:text-sm hidden lg:table-cell">{row.email || '-'}</td> {/* Mostrar '-' si el email es null/undefined */}
                <td className="py-3 px-4 text-xs sm:text-sm hidden lg:table-cell">📄✏️🗑️</td> {/* Mostrar '-' si el email es null/undefined */}
              </tr>
            ))}
            {displayData.length === 0 && (
              <tr>
                <td colSpan={6}className="py-4 px-4 text-center text-gray-500"> {/* Ajustar colSpan al número de columnas visibles por defecto */}
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

export default Parents;