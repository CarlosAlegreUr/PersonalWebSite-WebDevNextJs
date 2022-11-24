import Link from "next/link";
import MyPhoto from "./MyPhoto";
import SocialMediaNav from "./SocialMediaNav";

export default function AboutMe() {
  return (
    <div className="">
      <MyPhoto />
      <p> e-mail {"=>"} calegreu@gmail.com</p>
      <SocialMediaNav />
      <Link href="/me">
        <a>
          {" "}
          <h3> More about me </h3>
        </a>
      </Link>
    </div>
  );
}
