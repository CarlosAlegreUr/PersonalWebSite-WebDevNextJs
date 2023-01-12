import Image from "next/image";

interface usedProps {
  image: string;
  imageAlt: string;
  url: string;
  title: string;
  description: string;
}

export default function ShowCaseBox(props: usedProps): JSX.Element {
  return (
    // grow rounded-3xl bg-black text-center  showcase-box
    <div className="grow showcase-box">
      <br />
      <Image
        className="showcase-image"
        src={props.image}
        alt={props.imageAlt}
        width={200}
        height={200}
      />
      <a href={props.url} target="_blank" rel="noreferrer">
        <h3> {props.title} </h3>
      </a>
      <br />
      <p className="text-center"> {props.description} </p>
    </div>
  );
}
