import TechSection from "./TechSection";

type techItem = {
  name: string;
  icon: string;
};

const listOfProgramingLanguages: Array<techItem> = [
  { name: "C", icon: "/images/technologies-logos/clogo.webp" },
  { name: "C++", icon: "/images/technologies-logos/c++.webp" },
  { name: "Python", icon: "/images/technologies-logos/pythonlogo.png" },
  { name: "Solidity", icon: "/images/technologies-logos/soliditylogo.webp" },
  { name: "HTML", icon: "/images/technologies-logos/htmllogo.webp" },
  { name: "CSS", icon: "/images/technologies-logos/csslogo.webp" },
  { name: "SASS", icon: "/images/technologies-logos/sasslogo.webp" },
  { name: "JavaScript / NodeJS", icon: "/images/technologies-logos/jslogo.webp" },
  { name: "TypeScript", icon: "/images/technologies-logos/tslogo.webp" },
  { name: "R", icon: "/images/technologies-logos/rlogo.webp" },
  { name: "SQL", icon: "/images/technologies-logos/asmlogo.webp" },
  { name: "Linux Bash", icon: "/images/technologies-logos/bashlogo.webp" },
  { name: "Assembly x86", icon: "/images/technologies-logos/asmlogo.webp" },
];

export default function TechnologiesList() {
  return (
    <main className="fill-showcase">
      <hr />
      <h1 className="main-h1"> Technologies I&apos;ve tried/used </h1>
      <hr />
      <br />
      <TechSection
        name="Languages"
        listOfItems={listOfProgramingLanguages}
      />
      <TechSection name="Frameworks" listOfItems={listOfProgramingLanguages} />
      <TechSection name="Libraries" listOfItems={listOfProgramingLanguages} />
    </main>
  );
}
