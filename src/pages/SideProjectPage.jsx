import ProjectDetailPage from "../components/ProjectDetailPage";
import { projects } from "../data/siteData";

const sideProject = projects.find((item) => item.slug === "side-project");

export default function SideProjectPage() {
  return <ProjectDetailPage project={sideProject} />;
}
