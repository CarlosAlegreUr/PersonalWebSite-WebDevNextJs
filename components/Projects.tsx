import ProjectsSection from "./ProjectsSection";

interface ProjectsSection {
  title: string;
  sectionProjects: Object;
}

// To add more sections go to index.tsx and add a new filtered section in
// getStaticsProps() and after that add it to the allSections array in this file.
export default function Projects({ projects }: any): JSX.Element {
  const {
    githubPinnedProjects,
    githubWebProjects,
    githubWeb3Projects,
    githubAiProjects,
    githubPhoneAppsProjects,
  } = projects;
  console.log(githubWeb3Projects);
  const allSections: Array<ProjectsSection> = [
    {
      title: "Cooler Projects",
      sectionProjects: { projects: githubPinnedProjects },
    },
    {
      title: "Web",
      sectionProjects: { projects: githubWebProjects },
    },
    {
      title: "Web 3",
      sectionProjects: { projects: githubWeb3Projects },
    },
    {
      title: "AI",
      sectionProjects: { projects: githubAiProjects },
    },
    {
      title: "Phone Apps",
      sectionProjects: { projects: githubPhoneAppsProjects },
    },
  ];

  return (
    <section>
      {allSections.map((section: ProjectsSection, id: number) => {
        return (
          <ProjectsSection
            key={id}
            title={section.title}
            projectsData={section.sectionProjects}
          />
        );
      })}
    </section>
  );
}
