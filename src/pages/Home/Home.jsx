import storeImage from "../../assets/images/store.webp";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BERBS</h1>
      <img src={storeImage} alt="Store" className={styles.store}></img>
      <h2>Find Your Everyday Style</h2>
      <p>
        Discover clothing that brings together comfort, quality, and timeless
        style. From everyday essentials to standout pieces, find something that
        feels uniquely you.
      </p>
      <p>
        Explore our latest collections, refresh your wardrobe, and make every
        outfit your own.
      </p>
      <h3>Style starts here.</h3>
    </div>
  );
}
