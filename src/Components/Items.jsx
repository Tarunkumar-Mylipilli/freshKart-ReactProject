import React from 'react'
import styles from "../Styles/items.module.css"
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AppContext from '../Services/AppContext';
import AddItem from './Additem';

const Items = () => {
  const params = useParams();
  const type = params["type"];
  const [state, setState] = useContext(AppContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let tempItems = [];
    for (let product of state.products) {
      if (product.type === type) {
        tempItems.push(product);
      }
    }
    setItems(tempItems);
  }, [type, state.products]);

  return (
    <div className={styles.itemsContainer}>
      <div className={styles.heading}>All {type}</div>
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
                  <AddItem item={item} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Items;

