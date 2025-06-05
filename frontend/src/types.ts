import {
  ColumnDef,
} from "@tanstack/react-table"

export interface Estudiante {
  id: number;
  nombres: string;
  apellidos: string;
  tipo_documento: string;
  edad: number;
  documento_identidad: string;
  representante_id: number;
  sede_id: number;
  horario_id: number;
  fecha_inscripcion: string;
  correo: string;
  direccion: string;
  telefono: string;
  rut: string;
  autoriza_uso_imagen: boolean;
  acepta_reglamento: boolean;
  observaciones: string;
  representante: Representante;
  sede: Sede;
  horario: Horario;
}

export interface Representante {
  id: number;
  nombres: string;
  apellidos: string;
  tipo_documento: string;
  documento_identidad: string;
  telefono: string;
  email: string;
  direccion: string | null;
  rut: string | null;
}

export interface Sede {
  id: number;
  nombre: string;
  direccion: string;
}

export interface Horario {
  id: number;
  dia_semana: string;
  hora_inicio: string;
  hora_fin: string;
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  handlePageChange: (type: 'first' | 'previous' | 'next' | 'last') => void
  nextPage: string | null
  previousPage: string | null
}