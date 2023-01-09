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
  const images = mappingNameToImage(projectsData);
  console.log(images);
  const rowsNum = Math.floor(projectsData.length / 2) + 1;
  const numOfRows = Array.from({ length: rowsNum }, () => 0);
  const numOfCols = [1, 2];
  let totalAdded = 0;

  if (projectsData.length > 0) {
    return (
      <table>
        <tbody>
          {numOfRows.map((row: any, rowNum: number) => {
            return (
              <tr>
                {numOfCols.map((col: any, numOfCol: number) => {
                  if (totalAdded < projectsData.length) {
                    const totalPositionId =
                      numOfCol + rowNum * numOfCols.length;
                    totalAdded += 1;
                    return (
                      <td>
                        <ShowCaseBox
                          key={totalPositionId}
                          title={projectsData[totalPositionId].name}
                          description={
                            projectsData[totalPositionId].description
                          }
                          image={images[totalPositionId]}
                          url={projectsData[totalPositionId].url}
                          imageAlt="One of the developer's github projects, click to go github repository"
                        />
                      </td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else {
    return <table></table>;
  }
}

function mappingNameToImage(projects: any) {
  const imagesArray = projects.map((project: any) => {
    let image;
    switch (project.name) {
      case "BuddyFighters-FullstackWeb3NFTGame":
        image = "/../public/images/projects-images/buddyFightersNFT.png";
        break;
      case "GaimonAndYou-FullstackClassicWebApp":
        image = "/../public/images/projects-images/gaimon-and-you.png";
        break;
      case "DataStructures-Algorithms-DesignPatterns":
        image =
          "/../public/images/projects-images/data-structures-and-algo.jpg";
        break;
      case "InputControl-SmartContract-DesignPattern":
        image = "/../public/images/projects-images/inputControl.png";
        break;
      case "PersonalWebSite-WebDevNextJs":
        image = "/../public/images/my_face.jpg";
        break;
      case "FairTaxesAnalytics-WebDevReactJs":
        image = "/../public/images/projects-images/FTA.jpg";
        break;
      default:
        image = "/../public/images/default_image.jpg";
        break;
    }
    return image;
  });
  return imagesArray;
}
