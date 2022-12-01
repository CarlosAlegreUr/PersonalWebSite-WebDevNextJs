import Link from "next/link";
import MyPhoto from "./MyPhoto";
import SocialMediaNav from "./SocialMediaNav";

export default function AboutMe() {
  return (
    <section className="about-me-section">
      <MyPhoto />
      <br />
      <hr/>
      <p> e-mail : calegreu@gmail.com</p>
      <hr/>
      <br />
      <SocialMediaNav />
      <Link href="/me">
        <button> More about me... </button>
      </Link>
    </section>
  );
}
