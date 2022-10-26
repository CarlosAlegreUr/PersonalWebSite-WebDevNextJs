import Image from "next/image";

export default function MyPhoto() {
  return (
    <div className="grid gap-4">
      <Image
        className="rounded-3xl"
        src="/../public/images/my_face.jpg"
        width={"250"}
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
