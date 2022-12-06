import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import ShowcaseBox from "../components/ShowcaseBox";

const Me: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="main-header fixed"> Personal Interests </header>
      <main className={styles.main}>
        <ShowcaseBox
          title="Healthy lifestyle/Training"
          description={description_healthyLifeStyleGym}
          image="/images/likes-images/calisthenics.jpg"
          imageAlt="The developer showing his trainned boddy"
        />
        <div className="flex justify-center space-x-96 my-20">
          <ShowcaseBox
            title="Maths"
            description={description_maths}
            image="/images/likes-images/maths.jpg"
            imageAlt="Maths"
          />

          <ShowcaseBox
            title="Freedom"
            description={description_freedom}
            image="/images/likes-images/freedom.jpg"
            imageAlt="Freedom representation"
          />
        </div>

        <div className="flex justify-center space-x-96 my-20">
          <ShowcaseBox
            title="Philosophize"
            description={description_philosophy}
            image="/images/likes-images/philosophize.jpg"
            imageAlt="Greek statue"
          />

          <ShowcaseBox
            title="Party / Dance / Piano"
            description={description_partyAndDance}
            image="/images/likes-images/party.jpg"
            imageAlt="A party"
          />
        </div>

        <ShowcaseBox
          title="OnePiece"
          description={description_onePiece}
          image="/images/likes-images/onepiece.jpg"
          imageAlt="Luffy holding his hat, one piece"
        />
      </main>
      <footer className="fixed-bottom-button">
        <Link href="/">
          <p> GO TO MAIN PAGE </p>
        </Link>
      </footer>
    </div>
  );
};

const description_healthyLifeStyleGym =
  "Calisthenics and gym enjoyer, 4 trainings/week and healthy diet.";

const description_maths =
  "Pasionate about finding patterns, generalizing them and expressing them in compact ways.";

const description_freedom =
  "Pursue your happiness while living and letting live (hakuna matata)";

const description_philosophy =
  "My math-enjoyer brain likes to use math generalization analysis to understand human kind in a more philosophycal way.";

const description_partyAndDance =
  "Such a funny and cheap experience to dance in a party surounded by people in good mood. Or just playing some piano at night after a long day.";

const description_onePiece =
  "A series about enjoying life despite of having to face your problems while pursuing your dreams. Best series ever.";

export default Me;
