import Image from "next/image";

export default function InterestsBox(props: any) {
  return (
    <div className="rounded-3xl bg-black text-center w-1/6">
      <h3> {props.title} </h3>
      <Image src={props.image} alt={props.imageAlt} width={200} height={200}/>
      <p className="text-center"> {props.description} </p>
    </div>
  );
}
