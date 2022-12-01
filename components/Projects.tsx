import ProjectsSection from "./ProjectsSection";
import { ReactComponentElement, useEffect } from "react";

import ShowCaseBox from "./ShowcaseBox";

interface ProjectsSection {
  title: string;
  fetchProjectsFunc: () => ReactComponentElement<"ul">;
}

// To add a section, add one more element to this array.
const allSections: Array<ProjectsSection> = [
  {
    title: "Cooler Projects",
    fetchProjectsFunc: () => {
      return (
        <ul className="projects-list">
          <li>
            <ShowCaseBox
              title="FairTaxesAnalytics"
              description="No cap"
              image="/../public/images/my_face.jpg"
              imageAlt="An NFT from the collection"
            />
          </li>
          <li>
            <ShowCaseBox
              title="Gaimon&You"
              description="No cap in my caption"
              image="/../public/images/my_face.jpg"
              imageAlt="An NFT from the collection"
            />
          </li>
          <li className="project-element">
            <ShowCaseBox
              title="This page! :D"
              description="No cap in my caption got a little booty eqweqweqweqweqweqweqwe"
              image="/../public/images/my_face.jpg"
              imageAlt="An NFT from the collection"
            />
          </li>
          <li>
            <ShowCaseBox
              title="FairTaxesAnalytics"
              description="No cap"
              image="/../public/images/my_face.jpg"
              imageAlt="An NFT from the collection"
            />
          </li>
          <li>
            <ShowCaseBox
              title="Gaimon&You"
              description="No cap in my caption"
              image="/../public/images/my_face.jpg"
              imageAlt="An NFT from the collection"
            />
          </li>
          <li>
            <ShowCaseBox
              title="This page! :D"
              description="No cap in my caption"
              image="/../public/images/my_face.jpg"
              imageAlt="An NFT from the collection"
            />
          </li>
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
    title: "AI (to come...)",
    fetchProjectsFunc: () => {
      return (
        <ul>
          <li>XD2</li>
        </ul>
      );
    },
  },
  {
    title: "Phone Apps (to come...)",
    fetchProjectsFunc: () => {
      return (
        <ul>
          <li>XD2</li>
        </ul>
      );
    },
  },
];

export default function Projects({ projects }: any): JSX.Element {
  useEffect(() => {
    console.log("VALUE RECIEVED")
    console.log(projects);
    console.log("---------------")
  }, []);
  return (
    <section>
      {allSections.map((section: ProjectsSection, id: number) => {
        return (
          <ProjectsSection
            key={id}
            title={section.title}
            projectsData={projects}
          />
        );
      })}
    </section>
  );
}
