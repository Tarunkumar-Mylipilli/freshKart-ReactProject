import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../Styles/banner.module.css"
import vegImg from "../images/Vegetables.png";
import appleImg from "../images/Apple.png";
import fruitImg from "../images/Fruits.png";
import beansImg from "../images/Beans.png";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <Carousel
    autoPlay={true}
    infiniteLoop={true}
    interval={3000}
    showThumbs={false}
    showStatus={false}
  >
    <div>
      <img src={vegImg} alt="" />
      <div className={styles.heading}>Get Potatoes free</div>
      <div className={styles.desc}>
        Buy vegetables and get potatoes free. Conditions apply
      </div>
      <div className={styles.cta}>
        <Link to="/items/vegetables">Shop Now</Link>
      </div>
    </div>
    <div>
      <img src={appleImg} alt="" />
      <div className={styles.heading}>
        An apple a day keeps doctor away
      </div>
      <div className={styles.desc}>Royal Gala Apples</div>
      <div className={styles.cta}>
        <Link to="/items/fruits">Shop Now</Link>
      </div>
    </div>
    <div>
      <img src={fruitImg} alt="" />
      <div className={styles.heading}>Bite Into Everyday Wellness</div>
      <div className={styles.desc}>Start your day with a fruit</div>
      <div className={styles.cta}>
        <Link to="/items/fruits">Shop Now</Link>
      </div>
    </div>
    <div>
      <img src={beansImg} alt="" />
      <div className={styles.heading}>Rich in Protein</div>
      <div className={styles.desc}>20% discount on French Beans</div>
      <div className={styles.cta}>
        <Link to="/items/vegetables">Shop Now</Link>
      </div>
    </div>
  </Carousel>
  )
}

export default Banner