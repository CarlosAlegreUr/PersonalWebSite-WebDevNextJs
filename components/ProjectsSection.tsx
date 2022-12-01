import ShowCaseBox from "./ShowcaseBox";
import { ReactComponentElement, useState } from "react";

interface usedProps {
    title : string;
    fetchProjectsFunc: () => ReactComponentElement<"ul">;
}

export default function Projects({title, fetchProjectsFunc} : usedProps) : JSX.Element {
  //TODO: change to true
  const [displayProjects, setDisplayProjects] = useState(false);
  return (
    <section className="">
      <div className="project-title-show-div">
        <h1 className="h1-projects-main"> {title} </h1>
        Hide
        <input
          type="checkbox"
          onChange={() => {
            setDisplayProjects(!displayProjects);
          }}
        ></input>
      </div>
      {displayProjects && fetchProjectsFunc()} 

      {displayProjects && (
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
      )}
    </section>
  );
}
