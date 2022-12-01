import TechSection from "./TechSection";

type techItem = {
  name: string;
  icon: string;
};

const listOfProgramingLanguages: Array<techItem> = [
  { name: "C", icon: "/images/clogo.webp" },
  { name: "C++", icon: "/images/c++.webp" },
  { name: "Python", icon: "/images/pythonlogo.png" },
  { name: "Solidity", icon: "/images/soliditylogo.webp" },
  { name: "HTML", icon: "/images/htmllogo.webp" },
  { name: "CSS", icon: "/images/csslogo.webp" },
  { name: "SASS", icon: "/images/sasslogo.webp" },
  { name: "JavaScript / NodeJS", icon: "/images/jslogo.webp" },
  { name: "TypeScript", icon: "/images/tslogo.webp" },
  { name: "R", icon: "/images/rlogo.webp" },
  { name: "Linux Bash", icon: "/images/bashlogo.webp" },
  { name: "Assembly x86", icon: "/images/asmlogo.webp" },
];

export default function TechnologiesList() {
  return (
    <main className="fill-showcase">
      <hr />
      <h1 className="main-h1"> Technologies I've tried/used </h1>
      <hr />
      <br />
      <TechSection
        name="Programming/Coding Languages"
        listOfItems={listOfProgramingLanguages}
      />
      <TechSection name="Frameworks" listOfItems={listOfProgramingLanguages} />
      <TechSection name="Libraries" listOfItems={listOfProgramingLanguages} />
    </main>
  );
}
