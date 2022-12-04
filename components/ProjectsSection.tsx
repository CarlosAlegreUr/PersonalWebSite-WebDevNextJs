import { useState } from "react";
import ShowCaseBox from "./ShowcaseBox";

interface usedProps {
  title: string;
  projectsData: any;
}

export default function Projects({
  title,
  projectsData,
}: usedProps): JSX.Element {
  const [displayProjects, setDisplayProjects] = useState(true);
  return (
    <section>
      <div className="project-section-div">
        <h1>
          {!(projectsData.projects.length === 0)
            ? title
            : title.concat(" (TO COME...)")}{" "}
        </h1>
        {!(projectsData.projects.length === 0) && (
          <div className="hide-checkbox-div">
            <input
              type="checkbox"
              onChange={() => {
                setDisplayProjects(!displayProjects);
              }}
            ></input>
            <p>HIDE</p>
          </div>
        )}
      </div>
      {displayProjects && createGridFromProjectsData(projectsData.projects)}
    </section>
  );
}

function createGridFromProjectsData(projectsData: any) {
  return (
    <ul className="projects-list">
      <li>
        {projectsData.map((project: any, id: number) => {
          return (
            <ShowCaseBox
              key={id}
              title={project.name}
              description={project.description}
              image="/../public/images/my_face.jpg"
              url={project.url}
              imageAlt="One of developer's github projects, click to go github repository"
            />
          );
        })}
      </li>
    </ul>
  );
}
