import ShowCaseBox from "./ShowcaseBox";
import styles from "../styles/Home.module.css";

export default function MyBusinesses() : JSX.Element {
  return (
    <div className={styles.container}>
      <ShowCaseBox
        title="NFT Collection 1"
        description="Amazing NFT collection"
        image="/../public/images/my_face.jpg"
        imageAlt="An NFT from the collection"
      />

      <ShowCaseBox
        title="My Business Name"
        description="Amazing business"
        image="/../public/images/my_face.jpg"
        imageAlt="Me and my co-founder"
      />

      <ShowCaseBox
        title="NFT Collection 2"
        description="Amazing NFT collection"
        image="/../public/images/my_face.jpg"
        imageAlt="An NFT from the collection"
      />
    </div>
  );
};
