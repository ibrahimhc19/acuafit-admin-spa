import type { Estudiante } from "../types";
import { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
// import { Trash2 } from 'lucide-react';


export default function StudentsPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        <table>
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
        </table>
      </div>
    </div>
  );
}
