import styles from "../styles/Home.module.css";
import ShowCaseBox from "./ShowcaseBox";

export default function Projects() {
  // Use props
  return (
    <main className="">
      <div className="project-title-show-div">
        <h1 className="h1-projects-main"> COOLER PROJECTS</h1>
        Hide <input type="checkbox"></input>
      </div>
      <ul className="projects-list">
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
        <li className="project-element">
          <ShowCaseBox
            title="This page! :D"
            description="No cap in my caption got a little booty eqweqweqweqweqweqweqwe"
            image="/../public/images/my_face.jpg"
            imageAlt="An NFT from the collection"
          />
        </li>
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

      <h2 className="h1-projects-main">Web Dev</h2>
      <ul className="columns-2">
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

      <h2 className="h1-projects-main">Web 3 Dev</h2>
      <ul className="columns-2">
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

      <h2 className="h1-projects-main">AI && PHONE APPS {"(To come...)"}</h2>
      <h1> OTHER PROJECTS </h1>
    </main>
  );
}
