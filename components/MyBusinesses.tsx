import ShowCaseBox from "./ShowcaseBox";
import styles from "../styles/Home.module.css";

export default function MyBusinesses(): JSX.Element {
  return (
    <div className={styles.container}>
      <ShowCaseBox
        title="YC-Experiences Club"
        description="Club I created with my friend. We raffle real-life experiences around the world with NTFs as entry tickets and more."
        image="/images/my-businesses-images/yc-photo8.jpeg"
        imageAlt="Me and my co-founder"
        url="https://thecrouchys.com/"
      />

      <ShowCaseBox
        title="The Crouchys"
        description="The NFT collection that grants access to the YC-Experiences Club."
        image="/images/my-businesses-images/c3.gif"
        imageAlt="A Crouchy"
        url="https://thecrouchys.com/"
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
