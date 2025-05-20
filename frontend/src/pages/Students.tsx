export default function StudentsPage() {
  return (
    <div className="container mx-auto p-2 sm:p-4"> {/* Ajuste de padding para pantallas muy pequeñas */}
    <h1 className="text-2xl font-semibold mb-4 text-gray-700">Estudiantes</h1>
      <div className="overflow-x-auto shadow-md rounded-lg"> {/* Mover shadow y rounded al div de scroll para mejor consistencia visual */}
        <table className="min-w-full bg-white">
          <thead className="bg-[#352c6f] text-white">
            <tr>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm">#</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm">Nombre</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm">Apellido</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm hidden md:table-cell">Edad</th> {/* Oculto en pantallas pequeñas, visible desde medianas */}
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm hidden lg:table-cell">Número de Documento</th> {/* Oculto hasta pantallas grandes */}
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm hidden xl:table-cell">Representante</th> {/* Oculto hasta pantallas extra grandes */}
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm">Sede</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm hidden lg:table-cell">Horario</th> {/* Oculto hasta pantallas grandes */}
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm hidden md:table-cell">Fecha de inscripción</th> {/* Oculto en pantallas pequeñas, visible desde medianas */}
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm hidden md:table-cell">Acciones</th> {/* Oculto en pantallas pequeñas, visible desde medianas */}
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {/* Ejemplo de Fila 1 */}
            {/* <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-4 text-xs sm:text-sm">1</td>
              <td className="py-3 px-4 text-xs sm:text-sm">Ana</td>
              <td className="py-3 px-4 text-xs sm:text-sm">Pérez</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden md:table-cell">28</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden lg:table-cell">12345678</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden xl:table-cell">Laura Vargas</td>
              <td className="py-3 px-4 text-xs sm:text-sm">Central</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden lg:table-cell">L-V 9am-5pm</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden md:table-cell">2025-01-15</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden md:table-cell">📄✏️🗑️</td>
            </tr> */}
            {/* Ejemplo de Fila 2 */}
            {/* <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-4 text-xs sm:text-sm">2</td>
              <td className="py-3 px-4 text-xs sm:text-sm">Carlos</td>
              <td className="py-3 px-4 text-xs sm:text-sm">Gómez</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden md:table-cell">45</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden lg:table-cell">87654321</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden xl:table-cell">Miguel Castro</td>
              <td className="py-3 px-4 text-xs sm:text-sm">Norte</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden lg:table-cell">L-V 8am-4pm</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden md:table-cell">2025-02-20</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden md:table-cell">📄✏️🗑️</td>
            </tr> */}
            {/* Ejemplo de Fila 3 */}
            {/* <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-4 text-xs sm:text-sm">3</td>
              <td className="py-3 px-4 text-xs sm:text-sm">Luisa</td>
              <td className="py-3 px-4 text-xs sm:text-sm">Martínez</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden md:table-cell">34</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden lg:table-cell">11223344</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden xl:table-cell">Sofía López</td>
              <td className="py-3 px-4 text-xs sm:text-sm">Sur</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden lg:table-cell">Sáb 9am-1pm</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden md:table-cell">2025-03-10</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden md:table-cell">📄✏️🗑️</td>
            </tr> */}
            {/* Ejemplo de Fila 4 */} {/* Última fila sin borde inferior si se desea */}
            {/* <tr className="hover:bg-gray-100"> 
              <td className="py-3 px-4 text-xs sm:text-sm">4</td>
              <td className="py-3 px-4 text-xs sm:text-sm">Jorge</td>
              <td className="py-3 px-4 text-xs sm:text-sm">Rodríguez</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden md:table-cell">52</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden lg:table-cell">44332211</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden xl:table-cell">Andrés Silva</td>
              <td className="py-3 px-4 text-xs sm:text-sm">Central</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden lg:table-cell">L-V 10am-6pm</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden md:table-cell">2025-04-05</td>
              <td className="py-3 px-4 text-xs sm:text-sm hidden md:table-cell">📄✏️🗑️</td>
            </tr> */}
            {/* Puedes añadir más filas aquí */}
          </tbody>
        </table>
      </div>
    </div>
  );
}