import type { Estudiante } from "../types";
import { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
// import { Trash2 } from 'lucide-react';
import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  // TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function StudentsPage() {
  const [tableData, setTableData] = useState<Estudiante[]>([]);
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");
  const [url, setUrl] = useState(
    `${import.meta.env.VITE_APP_API_URL}estudiantes`
  );
  const [indice, setIndice] = useState(1);

  const handleSiguiente = () => {
    setUrl(next);
  };
  const handleAnterior = () => {
    setUrl(previous);
  };

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const apiResponse = response.data;
        console.log(apiResponse);
        if (
          apiResponse &&
          apiResponse.data &&
          Array.isArray(apiResponse.data)
        ) {
          setTableData(apiResponse.data);
          setIndice(apiResponse.from)
          setNext(apiResponse.next_page_url || url);
          console.log("Siguiente: ",next);
          setPrevious(apiResponse.prev_page_url || `${import.meta.env.VITE_APP_API_URL}estudiantes`);
          console.log("Anterior: ",previous);
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
  }, [url]);

  return (
    <div className="container mx-auto sm:p-6 lg:p-8">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
        Listado de Estudiantes
      </h2>
      <Button onClick={handleAnterior}>Anterior</Button>
      <Button onClick={handleSiguiente}>Siguiente</Button>
      <div>
        <Table>
          <TableHeader className="border">
            <TableRow>
              <TableHead className="text-muted-foreground">#</TableHead>
              <TableHead className="text-muted-foreground">
                Nombres y apellidos
              </TableHead>
              <TableHead className="text-muted-foreground">Edad</TableHead>
              <TableHead className="text-muted-foreground">
                Correo electrónico
              </TableHead>
              <TableHead className="text-muted-foreground">Teléfono</TableHead>
              <TableHead className="text-muted-foreground">Sede</TableHead>
              <TableHead className="text-muted-foreground">Horario</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="border rounded bg-white">
            {tableData &&
              tableData.map((user, index) => (
                <TableRow
                  key={index}
                  className="hover:text-muted hover:bg-primary"
                >
                  <TableCell>{index+indice}</TableCell>
                  <TableCell>{user.nombres}</TableCell>
                  <TableCell>{user.edad}</TableCell>
                  <TableCell>{user.correo}</TableCell>
                  <TableCell>{user.telefono}</TableCell>
                  <TableCell>{user.sede.nombre}</TableCell>
                  <TableCell>{user.horario.dia_semana}</TableCell>
                </TableRow>
              ))
              }
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
