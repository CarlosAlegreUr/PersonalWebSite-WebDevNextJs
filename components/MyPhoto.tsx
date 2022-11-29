import Image from "next/image";

export default function MyPhoto() {
  return (
    <div className="about-me-div gap-2">
      <Image
        className="sizeXD"
        src="/images/my_face.jpg"
        width={"150"}
        height={"350"}
        alt="image of developer's face"
      />
      <div className="text-xl text-center">
        <p>+ Self-taught</p>
        <p>
          + 2 years of Informatics Engineering at Autonomous University of
          Barcelona
        </p>
      </div>
    </div>
  );
}
