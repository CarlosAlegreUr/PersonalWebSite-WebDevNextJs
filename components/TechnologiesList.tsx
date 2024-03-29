import TechSection from "./TechSection";

type techItem = {
  name: string;
  icon: string;
};

const listOfProgramingLanguages: Array<techItem> = [
  { name: "C", icon: "/images/technologies-logos/clogo.webp" },
  { name: "C++", icon: "/images/technologies-logos/c++.webp" },
  { name: "Python", icon: "/images/technologies-logos/pythonlogo.webp" },
  { name: "Solidity", icon: "/images/technologies-logos/soliditylogo.webp" },
  { name: "HTML", icon: "/images/technologies-logos/htmllogo.webp" },
  { name: "CSS", icon: "/images/technologies-logos/csslogo.webp" },
  { name: "SASS", icon: "/images/technologies-logos/sasslogo.webp" },
  {
    name: "JavaScript / NodeJS",
    icon: "/images/technologies-logos/jslogo.webp",
  },
  { name: "TypeScript", icon: "/images/technologies-logos/tslogo.webp" },
  { name: "R", icon: "/images/technologies-logos/rlogo.webp" },
  { name: "MySQL", icon: "/images/technologies-logos/mysqllogo.webp" },
  { name: "Linux Bash", icon: "/images/technologies-logos/bashlogo.webp" },
  { name: "Assembly x86", icon: "/images/technologies-logos/asmlogo.webp" },
];

const listOfFrameworks: Array<techItem> = [
  { name: "Hardhat", icon: "/images/technologies-logos/hardhat.webp" },
  { name: "Foundry", icon: "/images/technologies-logos/foundrylogo.webp" },
  { name: "NextJs", icon: "/images/technologies-logos/nextjs.webp" },
  { name: "React", icon: "/images/technologies-logos/react.webp" },
];

const listOfLibraries: Array<techItem> = [
  { name: "Todo...", icon: "/images/default_image.webp" },
];

export default function TechnologiesList(): JSX.Element {
  return (
    <main className="fill-showcase">
      <hr />
      <h1 className="main-h1"> Technologies I&apos;ve tried/used </h1>
      <hr />
      <br />
      <TechSection name="Languages" listOfItems={listOfProgramingLanguages} />
      <TechSection name="Frameworks" listOfItems={listOfFrameworks} />
      {/* <TechSection name="Libraries" listOfItems={listOfLibraries} /> */}
    </main>
  );
}
