import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Projects: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1> COOL PROJECTS </h1>
        <ul>
          <li>
            Web Dev
            <ul>
              <li>FairTaxesAnalytics</li>
              <li>Gaimon{"&"}You</li>
              <li>This page! :D</li>
            </ul>
          </li>
          <li>
            Web 3 Dev
            <ul>
              <li>BuddyFightersNFT - Game </li>
              <li>BuddyFightersNFT - NFT MarketPlace</li>
              <li>Gucci - Trading Bot</li>
              <li> Spanish Elections - Voting Blockchain Software</li>
            </ul>
          </li>
          <li>
            {" "}
            AI
            <ul>
              <li>Simple Chess AI</li>
            </ul>
          </li>
        </ul>
      </main>
      <button> GO HOME </button>
    </div>
  );
};

export default Projects;
