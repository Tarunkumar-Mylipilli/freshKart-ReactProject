import React from 'react'
import styles from "../Styles/popular.module.css"
import Additem from './Additem';

const Popular = ({ title, items }) => {
  return (
    <div className={styles.popularContainer}>
      <div className={styles.heading}>{title}</div>
      <div className={styles.items}>
        {items.map((item) => {
          return (
            <div className={styles.item} key={item.id}>
              <div className={styles.picContainer}>
                <img src={item.pic} alt="" />
              </div>
              <div className={styles.dataContainer}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.weight}>{item.weight}</div>
                <div className={styles.price}>
                  <div className={styles.current}>₹{item.price}</div>
                  {item.was !== item.price ? (
                    <div className={styles.was}>₹{item.was}</div>
                  ) : null}
                </div>
                <div className={styles.cta}>
                    <Additem item={item} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;