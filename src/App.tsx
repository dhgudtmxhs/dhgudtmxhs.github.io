import { useLayoutEffect } from "react";
import { Route, Routes, useLocation, useNavigationType } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import CareerPage from "./pages/CareerPage";
import DndProjectPage from "./pages/DndProjectPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import BetaProjectPage from "./pages/SideProjectPage";
import SideProjectsPage from "./pages/SideProjectsPage";

const pageTitles: Record<string, string> = {
  "/": "오형석 | Backend Developer",
  "/about-me": "About Me | 오형석",
  "/career": "Career | 오형석",
  "/side-projects": "Side Projects | 오형석",
  "/side-projects/beta": "BETA Backend Server | 오형석",
  "/side-projects/dnd-15th-5": "DND 15기 5조 Backend | 오형석",
};

function RouteChangeEffects() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    const normalizedPath = pathname.replace(/\/+$/, "") || "/";
    document.title = pageTitles[normalizedPath] ?? "페이지를 찾을 수 없습니다 | 오형석";

    if (navigationType === "POP") return;

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const frame = requestAnimationFrame(() => {
      document.querySelector<HTMLElement>("[data-page-heading]")?.focus({ preventScroll: true });
    });

    return () => cancelAnimationFrame(frame);
  }, [navigationType, pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <RouteChangeEffects />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/side-projects" element={<SideProjectsPage />} />
        <Route path="/side-projects/beta" element={<BetaProjectPage />} />
        <Route path="/side-projects/dnd-15th-5" element={<DndProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
