import styles from "../styles/Home.module.css";

import type { NextPage } from "next";
import Head from "next/head";

import { useReducer } from "react";

import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import MyBusinesses from "../components/MyBusinesses";
import TechnologiesList from "../components/TechnologiesList";

interface actionType {
  type: string;
}

function displayReducer(
  state: Array<boolean>,
  action: actionType
): Array<boolean> {
  switch (action.type) {
    case "projects":
      return handleButtonsClicked(state, 0);
    case "business":
      return handleButtonsClicked(state, 1);
    case "techs":
      return handleButtonsClicked(state, 2);
  }
  return [...state];
}

const Home: NextPage = () => {
  const [displayElement, dispatch] = useReducer(displayReducer, [
    true,
    false,
    false,
  ]);
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
      <header className="main-header"> Carlos Alegre's portfiolio</header>
      <div className="video-div">
        <video autoPlay loop muted src="./videos/stars.mp4" />
      </div>
      <main className="block space-font">
        <button
          className="button3d"
          onClick={() => {
            console.log("Activaying 3D... (to be implemented)");
          }}
        >
          Activate 3D animation {"(todo...)"}
        </button>

        <section className="main-section">
          <AboutMe />

          <div className="content-showing-section">
            {displayElement[0] && <Projects />}
            {displayElement[1] && <MyBusinesses />}
            {displayElement[2] && <TechnologiesList />}
          </div>

          <div className="buttons-div">
            <button
              onClick={() => {
                dispatch({ type: "projects" });
              }}
            >
              {" "}
              PROJECTS{" "}
            </button>
            <button
              onClick={() => {
                dispatch({ type: "business" });
              }}
            >
              {" "}
              MY BUSINESSES{" "}
            </button>
            <button
              onClick={() => {
                dispatch({ type: "techs" });
              }}
            >
              {" "}
              TECHNOLOGIES TRIED/USED{" "}
            </button>
          </div>
        </section>
      </main>
      <footer> GO BACK TO THE TOP </footer>
    </>
  );
};

export default Home;

function handleButtonsClicked(
  state: Array<boolean>,
  position: number
): Array<boolean> {
  return [...state].map((element, index) => {
    if (index === position) {
      return true;
    } else {
      return false;
    }
  });
}
