import Image from "next/image";

export default function MyPhoto() {
  return (
    <div className="image-and-caption-div">
      <Image
        className="my-photo"
        src="/images/my_face.webp"
        width={"150"}
        height={"250"}
        alt="image of developer's face"
        title="Computers"
      />
      <p>+ Self-taught</p>
      <p>
        + 2 years of Informatics Engineering at Autonomous University of
        Barcelona
      </p>
    </div>
  );
}
