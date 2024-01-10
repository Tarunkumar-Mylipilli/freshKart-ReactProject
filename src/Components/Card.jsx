import styles from "../styles/cards.module.css";
import mangoImg from "../images/Mango.png";
import bananaImg from "../images/Banana.png";
import vegImg from "../images/Veggies.png";

const Cards = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={`${styles.card} ${styles.pink}`}>
        <div className={styles.caption}>
          Season's fresh & crispy, always!
        </div>
        <img className={styles.mango} src={mangoImg} alt="" />
      </div>
      <div className={`${styles.card} ${styles.orange}`}>
        <div className={styles.caption}>Your daily dose of goodness</div>
        <img className={styles.veg} src={vegImg} alt="" />
      </div>
      <div className={`${styles.card} ${styles.blue}`}>
        <div className={styles.caption}>Deals on bananas</div>
        <img className={styles.banana} src={bananaImg} alt="" />
      </div>
    </div>
  );
};
export default Cards;