import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import TechnologiesList from "../components/technologiesList";
import MyPhoto from "../components/myPhoto";
import SocialMediaNav from "../components/socialMediaNav";
import AboutMe from "../components/aboutMe";
import MyProjects from "../components/myProjects";

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
        <h1 className='underline text-5xl'>Hello world</h1>
        <MyPhoto />

        <AboutMe />

        <MyProjects />

        <SocialMediaNav />

        <TechnologiesList />
      </main>

      <footer className={styles.footer}>
        Contact me {"=>"} calegreu@gmail.com
      </footer>
    </div>
  );
};

export default Home;
