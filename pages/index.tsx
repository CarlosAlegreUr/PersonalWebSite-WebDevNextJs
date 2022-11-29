import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useState, useReducer, ReducerState, ReducerAction } from "react";

import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import MyBusinesses from "../components/MyBusinesses";
import TechnologiesList from "../components/TechnologiesList";

// const reducer = (state, action) => {};

const Home: NextPage = () => {
  const [displayProjects, setDisplayProjects] = useState<boolean>(true);
  // const [displaySelected, dispatch] = useReducer(reducer, [true, false, false]);

  function handleButtonsClick() {}

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
      <header className="main-header"> Carlos Alegre's portfiolio web</header>
      <main className="block space-font">
        <button className="button3d" onClick={handleButtonsClick}>Activate 3D animation</button>
        <div className="flex main-flex-div">
          <AboutMe />
          <div className="showcase-padding occupy-all">
            <Projects />
          </div>
          <ul>
            <li>
              <button>COOLER PROJECTS </button>
            </li>
            <li>
              <button> MY BUSINESSES </button>
            </li>
            <li>
              <button className="space_font">
                TECHNOLOGIES I'VE TRIED/USED
              </button>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

// {displaySelected.map((display: boolean) => display) &&
// toShowElements.map((element) => element)}

// {displayProjects && <Projects />}
export default Home;
