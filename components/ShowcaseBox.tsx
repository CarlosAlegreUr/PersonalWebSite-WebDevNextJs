import Image from "next/image";

export default function ShowCaseBox(props: any) : JSX.Element{
  return (
    <div className="rounded-3xl bg-black text-center w-1/6 showcase-box">
      <br/>
      <Image className="showcase-image" src={props.image} alt={props.imageAlt} width={200} height={200}/>
      <h3> {props.title} </h3>
      <br/>
      <p className="text-center"> {props.description} </p>
    </div>
  );
}
