import ProjectsSection from "./ProjectsSection";

interface ProjectsSection {
  title: string;
  sectionProjects: Object;
}

export default function Projects({ projects }: any): JSX.Element {
  // To add a section, add one more element to this array.
  const {
    githubPinnedProjects,
    githubWebProjects,
    githubWeb3Projects,
    githubAiProjects,
    githubPhoneAppsProjects,
  } = projects;
  const allSections: Array<any> = [
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
      {allSections.map((section: any, id: number) => {
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
