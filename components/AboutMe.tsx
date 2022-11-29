import Link from "next/link";
import MyPhoto from "./MyPhoto";
import SocialMediaNav from "./SocialMediaNav";

export default function AboutMe(){
  return (
    <div className="lef-padding">
      <MyPhoto />
      <p> e-mail {":=>"} calegreu@gmail.com</p>
      <SocialMediaNav />
      <Link href="/me">
        <a>
          {" "}
          <button> More about me... </button>
        </a>
      </Link>
    </div>
  );
}
