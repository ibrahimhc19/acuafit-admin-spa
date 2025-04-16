import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import StudentsPage from "./pages/StudentsPage";
import LocationsPage from "./pages/LocationsPage";
import AccountingPage from "./pages/AccountingPage";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardHome from "./pages/DashboardHome";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/accounting" element={<AccountingPage />} />
        </Route>
          <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
