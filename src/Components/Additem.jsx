import React from 'react'
import styles from "../Styles/Additem.module.css"
import { useContext } from 'react'
import AppContext from '../Services/AppContext'

const AddItem = ({ item }) => {
  const [state, setState] = useContext(AppContext);

  const addItem = () => {
    item.quantity = 1;
    let tempCart = [...state.cart];
    tempCart.push(item);
    setState({ ...state, cart: tempCart });
  };

  const increaseQty = () => {
    item.quantity = item.quantity + 1;
    let tempCart = [...state.cart];
    let index = tempCart.findIndex((cartItem) => cartItem.id === item.id);
    if (index > -1) {
        tempCart[index].quantity = item.quantity;
    }
    setState({ ...state, cart: tempCart });
  }

  const decreaseQty = () => {
    item.quantity = item.quantity - 1;
    let tempCart = [...state.cart];
    let index = tempCart.findIndex((cartItem) => cartItem.id === item.id);
    if (index > -1) {
        tempCart[index].quantity = item.quantity;
    }
    setState({ ...state, cart: tempCart });
  }

  return (
    <div className={styles.addItemContainer}>
        {item.quantity === 0 ? (<button className={styles.addItemBtn} onClick={addItem}>
        Add
      </button>) : (
        <div className={styles.addItem}>
            <button className={styles.minusBtn} onClick={decreaseQty}>-</button>
            <div className={styles.qty}>{item.quantity}</div>
            <button className={styles.plusBtn} onClick={increaseQty}>+</button>
        </div>
      )}
      
    </div>
  );
};
export default AddItem;

