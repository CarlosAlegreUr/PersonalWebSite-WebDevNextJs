import ProjectSection from "./ProjectSection";
import { ReactComponentElement } from "react";

interface ProjectsSection {
  title: string;
  fetchProjectsFunc: () => ReactComponentElement<"ul">;
}

// To add a section add one more element to this array.
const allSections: Array<ProjectsSection> = [
  {
    title: "Cooler Projects",
    fetchProjectsFunc: () => {
      return (
        <ul>
          <li>XDFFF</li>
        </ul>
      );
    },
  },
  {
    title: "Web",
    fetchProjectsFunc: () => {
      return (
        <ul>
          <li>XD2</li>
        </ul>
      );
    },
  },
  {
    title: "Web 3",
    fetchProjectsFunc: () => {
      return (
        <ul>
          <li>XD2</li>
        </ul>
      );
    },
  },
  {
    title: "New Section",
    fetchProjectsFunc: () => {
      return (
        <ul>
          <li>XD2</li>
        </ul>
      );
    },
  },
];

export default function Projects() {
  return (
    <main className="">
      {allSections.map((section: ProjectsSection) => {
        return (
          <ProjectSection
            title={section.title}
            fetchProjectsFunc={section.fetchProjectsFunc}
          />
        );
      })}
      <h2 className="h1-projects-main"> {"(To come...)"} </h2>
      <h2 className="h1-projects-main">AI && PHONE APPS</h2>
    </main>
  );
}
