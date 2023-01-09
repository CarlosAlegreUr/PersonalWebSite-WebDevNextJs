import Image from "next/image";

interface propsUsed {
  name: string;
  icon: string;
}

export default function TechItem({ name, icon }: propsUsed) {
  return (
    <li className="tech-item">
      {name} <Image width={"25"} height={"25"} src={icon} alt={""}/>
    </li>
  );
}
