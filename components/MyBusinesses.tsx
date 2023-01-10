import ShowCaseBox from "./ShowcaseBox";
import styles from "../styles/Home.module.css";

export default function MyBusinesses(): JSX.Element {
  return (
    <div className={styles.container}>
      <ShowCaseBox
        title="To be revealed..."
        description="Business I created with my friend. We... (to be revealed :d )"
        image="/images/default_image.webp"
        imageAlt="Me and my co-founder"
      />

      <ShowCaseBox
        title="NFT Collection name to be revealed..."
        description="An NFT collection with real life use."
        image="/images/default_image.webp"
        imageAlt="To be created..."
      />

      <ShowCaseBox
        title="NFT Collection name to be revealed..."
        description="A meme NFT collection made for fun."
        image="/images/default_image.webp"
        imageAlt="To be created..."
      />
    </div>
  );
}
