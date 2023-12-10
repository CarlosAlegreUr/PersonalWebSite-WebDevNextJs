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
  console.log(projectsData);
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
              <tr key={rowNum}>
                {numOfCols.map((col: any, numOfCol: number) => {
                  if (totalAdded < projectsData.length) {
                    const totalPositionId =
                      numOfCol + rowNum * numOfCols.length;
                    totalAdded += 1;
                    return (
                      <td key={totalPositionId}>
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
        image = "/images/projects-images/buddyFightersNFT.webp";
        break;
      case "GaimonAndYou-FullstackClassicWebApp":
        image = "/images/projects-images/gaimon-and-you.webp";
        break;
      case "DataStructures-Algorithms-DesignPatterns":
        image = "/images/projects-images/data-structures-and-algo.webp";
        break;
      case "InputControl-SmartContract-DesignPattern":
        image = "/images/projects-images/inputControl.webp";
        break;
      case "CallOrderControl-SmartContract-DesignPattern":
        image = "/images/projects-images/inputControl.webp";
        break;
      case "InteractionControl-SmartContract":
        image = "/images/projects-images/inputControl.webp";
        break;
      case "PersonalWebSite-WebDevNextJs":
        image = "/images/my_face.webp";
        break;
      case "FairTaxesAnalytics-WebDevReactJs":
        image = "/images/projects-images/FTA.webp";
        break;
      case "Audits-By-CarlosAlegreUr":
        image = "/images/projects-images/my-audits.webp";
        break;
      case "Forge-Snapshots-Analyzer":
        image = "/images/projects-images/forge-analyzer.webp";
        break;
      case "AuditExamplePractice":
        image = "/images/projects-images/my-audits.webp";
        break;
      case "Constellation-ChainlinkHackathon-2023":
        image = "/images/projects-images/chainlink-logo.svg";
        break;
      default:
        image = "/images/default_image.webp";
        break;
    }
    return image;
  });
  return imagesArray;
}
