import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
  {id: 1, nombres: "Juan", edad: 12, correo: "juan.perez@example.com", telefono: "3100000001", sede: "Norte", horario: "Lunes" },
  {id: 2, nombres: "Ana", edad: 10, correo: "ana.gomez@example.com", telefono: "3100000002", sede: "Sur", horario: "Martes" },
  {id: 3, nombres: "Luis", edad: 14, correo: "luis.martinez@example.com", telefono: "3100000003", sede: "Centro", horario: "Miércoles" },
  {id: 4, nombres: "María", edad: 11, correo: "maria.lopez@example.com", telefono: "3100000004", sede: "Norte", horario: "Jueves" },
  {id: 5, nombres: "Carlos", edad: 13, correo: "carlos.ramirez@example.com", telefono: "3100000005", sede: "Sur", horario: "Viernes" },
  {id: 6, nombres: "Sofía", edad: 9, correo: "sofia.mendez@example.com", telefono: "3100000006", sede: "Centro", horario: "Sábado" },
  {id: 7, nombres: "Diego", edad: 15, correo: "diego.rojas@example.com", telefono: "3100000007", sede: "Norte", horario: "Domingo" },
  {id: 8, nombres: "Valentina", edad: 12, correo: "valentina.soto@example.com", telefono: "3100000008", sede: "Sur", horario: "Lunes" },
  {id: 9, nombres: "Mateo", edad: 10, correo: "mateo.navarro@example.com", telefono: "3100000009", sede: "Centro", horario: "Martes" },
  {id: 10, nombres: "Camila", edad: 13, correo: "camila.castro@example.com", telefono: "3100000010", sede: "Norte", horario: "Miércoles" },
  {id: 11, nombres: "Andrés", edad: 11, correo: "andres.palacios@example.com", telefono: "3100000011", sede: "Sur", horario: "Jueves" },
  {id: 12, nombres: "Isabella", edad: 14, correo: "isabella.mora@example.com", telefono: "3100000012", sede: "Centro", horario: "Viernes" },
  {id: 13, nombres: "Sebastián", edad: 12, correo: "sebastian.vera@example.com", telefono: "3100000013", sede: "Norte", horario: "Sábado" },
  {id: 14, nombres: "Paula", edad: 10, correo: "paula.rios@example.com", telefono: "3100000014", sede: "Sur", horario: "Domingo" },
  {id: 15, nombres: "Julián", edad: 15, correo: "julian.acosta@example.com", telefono: "3100000015", sede: "Centro", horario: "Lunes" },
  {id: 16, nombres: "Laura", edad: 13, correo: "laura.peña@example.com", telefono: "3100000016", sede: "Norte", horario: "Martes" },
  {id: 17, nombres: "Tomás", edad: 11, correo: "tomas.valencia@example.com", telefono: "3100000017", sede: "Sur", horario: "Miércoles" },
  {id: 18, nombres: "Daniela", edad: 9, correo: "daniela.salazar@example.com", telefono: "3100000018", sede: "Centro", horario: "Jueves" },
  {id: 19, nombres: "Gabriel", edad: 14, correo: "gabriel.ospina@example.com", telefono: "3100000019", sede: "Norte", horario: "Viernes" },
  {id: 20, nombres: "Manuela", edad: 12, correo: "manuela.torres@example.com", telefono: "3100000020", sede: "Sur", horario: "Sábado" },
  {id: 21, nombres: "Felipe", edad: 10, correo: "felipe.zapata@example.com", telefono: "3100000021", sede: "Centro", horario: "Domingo" },
  {id: 22, nombres: "Sara", edad: 13, correo: "sara.murillo@example.com", telefono: "3100000022", sede: "Norte", horario: "Lunes" },
  {id: 23, nombres: "Alejandro", edad: 11, correo: "alejandro.arango@example.com", telefono: "3100000023", sede: "Sur", horario: "Martes" },
  {id: 24, nombres: "Renata", edad: 14, correo: "renata.patino@example.com", telefono: "3100000024", sede: "Centro", horario: "Miércoles" },
  {id: 25, nombres: "Samuel", edad: 12, correo: "samuel.cuervo@example.com", telefono: "3100000025", sede: "Norte", horario: "Jueves" },
  {id: 26, nombres: "Luciana", edad: 10, correo: "luciana.guerrero@example.com", telefono: "3100000026", sede: "Sur", horario: "Viernes" },
  {id: 27, nombres: "Emilio", edad: 15, correo: "emilio.cardenas@example.com", telefono: "3100000027", sede: "Centro", horario: "Sábado" },
  {id: 28, nombres: "Regina", edad: 13, correo: "regina.silva@example.com", telefono: "3100000028", sede: "Norte", horario: "Domingo" },
  {id: 29, nombres: "Bruno", edad: 11, correo: "bruno.perez@example.com", telefono: "3100000029", sede: "Sur", horario: "Lunes" },
  {id: 30, nombres: "Mía", edad: 9, correo: "mia.montoya@example.com", telefono: "3100000030", sede: "Centro", horario: "Martes" }
];
}

export default async function AccountingPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
