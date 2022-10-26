import Image from "next/image";

export default function MyPhoto() {
    return (
      <div>
       <Image
          src="/../public/images/my_face.jpg"
          width={200}
          height={200}
        ></Image>
        <h6>
          {" "}
          Self-taught + 2 years of Informatics Engineering at Autonomous
          University of Barcelona
        </h6>
      </div>
    );
  }
  