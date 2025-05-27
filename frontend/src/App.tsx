import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Students from "./pages/Students.tsx";
import Login from "./pages/Login.tsx";
import Locations from "./pages/Locations.tsx";
import Accounting from "./pages/Accounting.tsx";
import Schedules from "./pages/Schedules.tsx";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home.tsx";
import Parents from "./pages/Parents.tsx";
import Payments from "./pages/Payments.tsx";

export default function App() {

  return (
    <div className="app">
      <Router>
          <Routes>
            <Route element={<DashboardLayout />}>
            <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/estudiantes" element={<Students />} />
              <Route path="/representantes" element={<Parents />} />
              <Route path="/sedes" element={<Locations />} />
              <Route path="/horarios" element={<Schedules />} />
              <Route path="/pagos" element={<Payments />} />
              <Route path="/contabilidad" element={<Accounting />} />
            <Route path="/dashboard" element={<Home />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="login" element={<Login />} />
          </Routes>
      </Router>
    </div>
  );
}
