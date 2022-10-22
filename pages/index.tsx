import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carlos Alegre's Web</title>
        <meta
          name="Software Dev Web: Carlos Alegre Urquizú"
          content="Personal projects' web page of software engineer Carlos Alegre Urquizú"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Carlos Alegre's developer web</h1>
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

        <Link href="/projects">
          <a>
            <h2> My Software Projects! </h2>
          </a>
        </Link>

        <Link href="/me">
          <a>
            {" "}
            <h3> About me </h3>
          </a>
        </Link>

        <h5> LinkedIn </h5>
        <h5> GitHub </h5>
        <h5> Feever </h5>

        <hr />
        <h1> Technologies I've used: </h1>
        <ul>
          <li>
            Programming/Coding Languages
            <ul>
              <li>Solidity</li>
              <li>C++</li>
              <li>C</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>Linux Bash</li>
              <li>R</li>
              <li>Assembly x86</li>
            </ul>
          </li>
          <li>
            Frameworks
            <ul>
              <li>React</li>
              <li>NextJs</li>
              <li>Hardhat</li>
            </ul>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        Contact me {"=>"} calegreu@gmail.com
      </footer>
    </div>
  );
};

export default Home;
