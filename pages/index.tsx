import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import TechnologiesList from "../components/technologiesList";
import MyPhoto from "../components/myPhoto";
import SocialMediaNav from "../components/socialMediaNav";
import AboutMe from "../components/aboutMe";
import MyProjects from "../components/myProjects";
import ContactMe from "../components/contactMe";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carlos Alegre's Web</title>
        <meta
          name="Software Dev Web: Carlos Alegre Urquizú"
          content="Personal projects' web page of software engineer Carlos Alegre Urquizú"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex">
          <MyPhoto />
          <div className="">
            <h1 className={styles.title}>Carlos Alegre's developer web</h1>
            <SocialMediaNav />
          </div>
          <AboutMe />
        </div>
        <div className="flex justify-center">
          <ContactMe />
          <MyProjects />
        </div>
        <TechnologiesList/>
      </main>
    </>
  );
};

export default Home;
