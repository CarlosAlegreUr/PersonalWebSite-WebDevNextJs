import TechItem from "./TechItem";

type techItem = {
  name: string;
  icon: string;
};

interface propsUsed {
  name: string;
  listOfItems: Array<techItem>;
}

export default function TechSection({ name, listOfItems }: propsUsed) {
  return (
    <section>
      <h2 className="main-h2">{name}</h2>
      <br />
      <ul className="techs-list">
        {listOfItems.map((element) => {
          return <TechItem name={element.name} icon={element.icon} />;
        })}
      </ul>
      <br />
      <hr />
    </section>
  );
}
