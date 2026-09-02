import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import CareerPage from "./pages/CareerPage";
import DndProjectPage from "./pages/DndProjectPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import BetaProjectPage from "./pages/SideProjectPage";
import SideProjectsPage from "./pages/SideProjectsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-me" element={<AboutPage />} />
      <Route path="/career" element={<CareerPage />} />
      <Route path="/side-projects" element={<SideProjectsPage />} />
      <Route path="/side-projects/beta" element={<BetaProjectPage />} />
      <Route path="/side-projects/dnd-15th-5" element={<DndProjectPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
