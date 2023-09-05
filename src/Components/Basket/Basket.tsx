import React, { useEffect } from "react";
import { SlBasketLoaded } from "react-icons/sl";
import styles from "./basket.style.module.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTotals } from "../../redux/cartSlice";

const Basket = () => {

  const cart = useSelector((state)=>state.cart)
  const {cartTotalQuantity} = useSelector((state)=>state.cart)
  console.log('card', cart)
const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getTotals());
  }, [cart, dispatch])
  return (
    <div className={styles.basket}>
      <Link to="/shoppingCard">
        <SlBasketLoaded className={styles.basket_icon} />
        <span>Basket</span> <span className={styles.count}>{cartTotalQuantity}</span>
      </Link>
    </div>
  );
};

export default Basket;
