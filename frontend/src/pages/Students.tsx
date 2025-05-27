import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import type { Estudiante } from "../types";
import { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
// import { Trash2 } from 'lucide-react';

// eslint-disable-next-line react-hooks/rules-of-hooks
DataTable.use(DT);

export default function StudentsPage() {
  const [tableData, setTableData] = useState<Estudiante[][]>([]);
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const getData = async () => {
    axios
      .get(`${apiUrl}estudiantes`)
      .then((response) => {
        const apiResponse = response.data;
        console.log(apiResponse);
        if (
          apiResponse &&
          apiResponse.data &&
          Array.isArray(apiResponse.data)
        ) {
          setTableData(
            apiResponse.data.map((user: Estudiante, index: number) => [
              index + 1,
              `${user.nombres} ${user.apellidos}`,
              user.edad,
              user.correo,
              user.telefono,
              user.sede.nombre,
              `${user.horario?.dia_semana} ${user.horario?.hora_inicio} - ${user.horario?.hora_fin}`
            ])
          );
        } else {
          console.error(
            "La respuesta de la API no tiene el formato esperado:",
            apiResponse
          );
          setTableData([]);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
        setTableData([]);
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        Listado de Estudiantes
      </h1>

      <div className="overflow-x-auto bg-white shadow-xl rounded-lg p-2">
        <DataTable
          data={tableData}
          className="min-w-full w-full display compact nowrap order-column"
          options={{
            columnDefs: [
              {
                targets: "_all",
                className: "dt-left",
              },
            ],
            language: {
              search: "Buscar:",
              lengthMenu: "Mostrar _MENU_ registros por página",
              zeroRecords: "No se encontraron estudiantes que coincidan",
              info: "Mostrando página _PAGE_ de _PAGES_ (de _TOTAL_ registros)",
              infoEmpty: "No hay registros disponibles",
              infoFiltered: "(filtrado de _MAX_ registros totales)",
              paginate: {
                first: "Primero",
                last: "Último",
                next: "Siguiente",
                previous: "Anterior",
              },
            },
            lengthMenu: [
              [10, 15, 25, 50, 100, -1],

              ["10", "15", "25", "50", "100", "Todos"],
            ],
            // Podrías querer activar la paginación o cambiar el número de filas por defecto
            pageLength: 15,
            // paging: true, // Activa la paginación (generalmente activada por defecto)
            // searching: true, // Activa la búsqueda (generalmente activada por defecto)

            // Para un diseño responsive más avanzado, necesitarías la extensión DataTables Responsive:
            // responsive: true,
            // (Esto requiere importar y registrar la extensión 'datatables.net-responsive-dt')
          }}
        >
          <thead className="bg-[#352c6f] text-white">
            <tr>
              <th className="px-5 py-3 text-sm font-semibold">#</th>
              <th className="px-5 py-3 text-sm font-semibold">
                Nombres y apellidos
              </th>
              <th className="px-5 py-3 text-sm font-semibold">Edad</th>
              <th className="px-5 py-3 text-sm font-semibold">Correo</th>
              <th className="px-5 py-3 text-sm font-semibold">Teléfono</th>
              <th className="px-5 py-3 text-sm font-semibold">Sede</th>
              <th className="px-5 py-3 text-sm font-semibold">Horario</th>
            </tr>
          </thead>
        </DataTable>
      </div>
    </div>
  );
}
