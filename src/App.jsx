import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import CareerPage from "./pages/CareerPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SideProjectPage from "./pages/SideProjectPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-me" element={<AboutPage />} />
      <Route path="/career" element={<CareerPage />} />
      <Route path="/side-project" element={<SideProjectPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
