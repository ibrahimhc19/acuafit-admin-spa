/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);

  const [apiError, setApiError] = useState<string>("");
  const navigate = useNavigate();

  const usuario = "Ciudadano promedio";

  const handleLogout = async () => {
    setApiError("");

    try {
      const apiUrl = import.meta.env.VITE_APP_API_URL ?? "";

      const user = await axios.get(`${apiUrl}user`, {
        // withCredentials: true,
        // withXSRFToken: true,
      });

      console.log(user);
      // return user.data;

      await axios.get(`${apiUrl}sanctum/csrf-cookie`, {
        // withCredentials: true,
      });

      const response = await axios.post(`${apiUrl}logout`, {
        // withCredentials: true,
        // withXSRFToken: true,
        headers: {
          Accept: "application/json",
        },
      });
      console.log(response.data.message);

      // let responseData = {};
      // const contentType = response.headers.get("content-type");
      // if (contentType && contentType.includes("application/json")) {
      //   responseData = await response.json();
      // }

      // if (!response.ok) {
      //   const message =
      //     (responseData as { message?: string })?.message ||
      //     `Error ${response.status}: ${response.statusText}`;
      //   throw new Error(message);
      // }

      console.log("Logout exitoso");

      navigate("/login", {
        replace: true,
      });
    } catch (error: unknown) {
      let specificErrorMessage = "Error al cerrar sesión. Inténtalo de nuevo.";

      if (error instanceof Error) {
        specificErrorMessage = error.message;
      }

      setApiError(specificErrorMessage);
      console.error("Error de logout:", error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </header>
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
