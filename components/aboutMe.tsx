import Link from "next/link";

export default function AboutMe() {
  return (
    <Link href="/me">
      <a>
        {" "}
        <h3> About me </h3>
      </a>
    </Link>
  );
}
