"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { ArrowUpDown } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {

  id: number,
  nombres: string;
  edad: number;
  correo: string;
  telefono: string;
  sede: string
  horario: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "#",
    cell: ({ row }) => {
      return row.index + 1
    },
  },
  {
    accessorKey: "nombres",
    // header: "Nombres y apellidos",
    cell: ({ row }) => {
      return `${row.getValue('nombres')} ${row.getValue('sede')}`;
    },
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombres y apellidos
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "edad",
    header: "Edad",
  },
  {
    accessorKey: "correo",
    header: "Correo electrónico",
  },
  {
    accessorKey: "telefono",
    header: "Teléfono",
  },
  {
    accessorKey: "sede",
    header: "Sede",
  },
  {
    accessorKey: "horario",
    header: "Horario",
  },
  { header: "Acciones",
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menú</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.nombres.toString())}
            >
              Ver estudiante
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Editar estudiante</DropdownMenuItem>
            <DropdownMenuItem>Eliminar estudiante</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  // {
  //   accessorKey: "amount",
  //   header: () => <div className="text-right">Amount</div>,
  //   cell: ({row}) => {
  //     const amount = parseFloat(row.getValue(("amount")));
  //     const formatted = new Intl.NumberFormat("es-CO", {
  //       style: "currency",
  //       currency: "COP"
  //     }).format(amount);
  //     return <div className="text-right font-medium">{formatted}</div>
  //   },
  // },
]
