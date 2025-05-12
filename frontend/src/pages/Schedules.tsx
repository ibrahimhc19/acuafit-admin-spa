import React from 'react';

// Definición de tipos (puedes moverlos a un archivo .d.ts o types.ts si prefieres)
export type DiaSemana =
  | 'Lunes'
  | 'Martes'
  | 'Miércoles'
  | 'Jueves'
  | 'Viernes'
  | 'Sábado'
  | 'Domingo';

export interface ScheduleItem {
  id: number;
  dia_semana: DiaSemana;
  hora_inicio: string;
  hora_fin: string;
}

export interface SchedulesProps {
  data?: ScheduleItem[];
  tableName?: string;
}
// Fin de definición de tipos

const Schedules: React.FC<SchedulesProps> = ({ data, tableName = "Horarios" }) => {
  const defaultData: ScheduleItem[] = [
    { id: 1, dia_semana: 'Lunes', hora_inicio: '09:00', hora_fin: '17:00' },
    { id: 2, dia_semana: 'Martes', hora_inicio: '09:00', hora_fin: '17:00' },
    { id: 3, dia_semana: 'Miércoles', hora_inicio: '09:00', hora_fin: '13:00' },
    { id: 4, dia_semana: 'Jueves', hora_inicio: '10:00', hora_fin: '18:00' },
    { id: 5, dia_semana: 'Viernes', hora_inicio: '09:00', hora_fin: '16:00' },
    { id: 6, dia_semana: 'Sábado', hora_inicio: '10:00', hora_fin: '14:00' },
  ];

  const displayData: ScheduleItem[] = data && data.length > 0 ? data : defaultData;

  // Función simple para formatear la hora si viene con segundos (opcional)
  const formatTime = (timeString: string): string => {
    if (timeString && timeString.split(':').length === 3) {
      const [hours, minutes] = timeString.split(':');
      return `${hours}:${minutes}`;
    }
    return timeString;
  };

  return (
    <div className="container mx-auto p-2 sm:p-4">
      <h1 className="text-2xl font-semibold mb-4 text-gray-700">{tableName}</h1>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-[#352c6f] text-white">
            <tr>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm hidden md:table-cell">ID</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm">Día Semana</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm">Hora Inicio</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm">Hora Fin</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {displayData.map((schedule: ScheduleItem) => (
              <tr
                key={schedule.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-4 text-xs sm:text-sm hidden md:table-cell">{schedule.id}</td>
                <td className="py-3 px-4 text-xs sm:text-sm">{schedule.dia_semana}</td>
                <td className="py-3 px-4 text-xs sm:text-sm">{formatTime(schedule.hora_inicio)}</td>
                <td className="py-3 px-4 text-xs sm:text-sm">{formatTime(schedule.hora_fin)}</td>
                <td className="py-3 px-4 text-xs sm:text-sm">📄✏️🗑️</td>
              </tr>
            ))}
            {displayData.length === 0 && (
              <tr>
                <td
                  colSpan={4} // ID, Día Semana, Hora Inicio, Hora Fin
                  className="py-4 px-4 text-center text-gray-500"
                >
                  No hay horarios para mostrar.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Schedules;
