import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import AboutMe from "../components/AboutMe";
import { useState, useRef, ChangeEventHandler } from "react";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  const [displayProjects, setDisplayProjects] = useState<boolean>(true);
  const selectBar = useRef();

  // function handleChange() : ChangeEventHandler {
  //
  //
  // }

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
      <header className={styles.title}> Carlos Alegre's developer web</header>
      <main className="block">
        <div className="flex">
          <AboutMe />
          {displayProjects && <Projects />}
          <select>
            <option> COOLER PROJECTS </option>
            <option> MY BUSINESSES </option>
            <option> TECHNOLOGIES I'VE TRIED/USED </option>
          </select>
        </div>
      </main>
    </>
  );
};

export default Home;
