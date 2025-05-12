
// Definición de tipos (puedes moverlos a un archivo .d.ts o types.ts si prefieres)
export type MetodoPago = 'Efectivo' | 'Transferencia' | 'Tarjeta';

export interface PaymentItem {
  id: number;
  estudiante_id: number;
  monto: number;
  fecha_pago: string;
  metodo_pago: MetodoPago;
}

export interface PaymentsProps {
  data?: PaymentItem[];
  tableName?: string;
}
// Fin de definición de tipos

const Payments: React.FC<PaymentsProps> = ({ data, tableName = "Registro de Pagos" }) => {
  const defaultData: PaymentItem[] = [
    { id: 1, estudiante_id: 101, monto: 150000.00, fecha_pago: '2025-05-01', metodo_pago: 'Transferencia' },
    { id: 2, estudiante_id: 102, monto: 25000.50, fecha_pago: '2025-05-03', metodo_pago: 'Efectivo' },
    { id: 3, estudiante_id: 103, monto: 300000.00, fecha_pago: '2025-05-05', metodo_pago: 'Tarjeta' },
    { id: 4, estudiante_id: 101, monto: 75000.00, fecha_pago: '2025-05-10', metodo_pago: 'Transferencia' },
    { id: 5, estudiante_id: 104, monto: 120000.00, fecha_pago: '2025-05-11', metodo_pago: 'Efectivo' },
  ];

  const displayData: PaymentItem[] = data && data.length > 0 ? data : defaultData;

  const formatCurrency = (amount: number): string => {
    return amount.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
  };

  const formatDate = (dateString: string): string => {
    // Asume que la fecha viene en YYYY-MM-DD y la convierte a DD/MM/YYYY
    // o usa toLocaleDateString para un formato más localizado.
    try {
      const date = new Date(dateString + 'T00:00:00'); // Agregar 'T00:00:00' para evitar problemas de zona horaria con new Date()
      return date.toLocaleDateString('es-CO', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      return dateString; // Retorna el string original si hay error
    }
  };


  return (
    <div className="container mx-auto p-2 sm:p-4">
      <h1 className="text-2xl font-semibold mb-4 text-gray-700">{tableName}</h1>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-[#352c6f] text-white">
            <tr>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm hidden lg:table-cell">ID Pago</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm hidden md:table-cell">ID Estudiante</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm">Monto</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm">Fecha Pago</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm">Método Pago</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs sm:text-sm">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {displayData.map((payment: PaymentItem) => (
              <tr
                key={payment.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-4 text-xs sm:text-sm hidden lg:table-cell">{payment.id}</td>
                <td className="py-3 px-4 text-xs sm:text-sm hidden md:table-cell">{payment.estudiante_id}</td>
                <td className="py-3 px-4 text-xs sm:text-sm">{formatCurrency(payment.monto)}</td>
                <td className="py-3 px-4 text-xs sm:text-sm">{formatDate(payment.fecha_pago)}</td>
                <td className="py-3 px-4 text-xs sm:text-sm">{payment.metodo_pago}</td>
                <td className="py-3 px-4 text-xs sm:text-sm">📄✏️🗑️</td>
              </tr>
            ))}
            {displayData.length === 0 && (
              <tr>
                <td
                  colSpan={5} // ID Pago, ID Estudiante, Monto, Fecha Pago, Método Pago
                  className="py-4 px-4 text-center text-gray-500"
                >
                  No hay pagos registrados para mostrar.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Payments;