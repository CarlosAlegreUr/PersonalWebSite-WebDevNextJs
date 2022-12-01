import { ReactComponentElement, useState } from "react";

interface usedProps {
  title: string;
  fetchProjectsFunc: () => ReactComponentElement<"ul">;
}

export default function Projects({
  title,
  fetchProjectsFunc,
}: usedProps): JSX.Element {
  const [displayProjects, setDisplayProjects] = useState(true);
  return (
    <section>
      <div className="project-section-div">
        <h1> {title} </h1>
        <div className="hide-checkbox-div">
          <input
            type="checkbox"
            onChange={() => {
              setDisplayProjects(!displayProjects);
            }}
          ></input>
          <p>HIDE</p>
        </div>
      </div>
      {displayProjects && fetchProjectsFunc()}
    </section>
  );
}
