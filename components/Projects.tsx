import styles from "../styles/Home.module.css";
import ShowCaseBox from "./ShowcaseBox";

export default function Projects() {
  // Use props
  return (
    <div className="">
      <main className={styles.main}>
        <h1> COOLER PROJECTS </h1>
        <ul className="columns-2">
          <li>
            Web Dev
            <ul>
              <li>
                <ShowCaseBox
                  title="FairTaxesAnalytics"
                  description="No cap"
                  image="/../public/images/my_face.jpg"
                  imageAlt="An NFT from the collection"
                />
              </li>
              <li>
                <ShowCaseBox
                  title="Gaimon&You"
                  description="No cap in my caption"
                  image="/../public/images/my_face.jpg"
                  imageAlt="An NFT from the collection"
                />
              </li>
              <li>
                <ShowCaseBox
                  title="This page! :D"
                  description="No cap in my caption"
                  image="/../public/images/my_face.jpg"
                  imageAlt="An NFT from the collection"
                />
              </li>
            </ul>
          </li>
          <li>
            Web 3 Dev
            <ul>
              <li>
                <ShowCaseBox
                  title="BuddyFightersNFT - Game"
                  description="No cap"
                  image="/../public/images/my_face.jpg"
                  imageAlt="An NFT from the collection"
                />
              </li>
              <li>
                <ShowCaseBox
                  title="BuddyFightersNFT - NFT MarketPlace"
                  description="No cap"
                  image="/../public/images/my_face.jpg"
                  imageAlt="An NFT from the collection"
                />
              </li>
              <li>
                <ShowCaseBox
                  title="Gucci - Trading Bot"
                  description="No cap"
                  image="/../public/images/my_face.jpg"
                  imageAlt="An NFT from the collection"
                />
              </li>
              <li>
                <ShowCaseBox
                  title="Spanish Elections - Voting Blockchain Software"
                  description="No cap"
                  image="/../public/images/my_face.jpg"
                  imageAlt="An NFT from the collection"
                />
              </li>
            </ul>
          </li>
          <li>
            AI && PHONE APPS {"(To come...)"}
          </li>
        </ul>

        <h1> OTHER PROJECTS </h1>
      </main>
    </div>
  );
}
