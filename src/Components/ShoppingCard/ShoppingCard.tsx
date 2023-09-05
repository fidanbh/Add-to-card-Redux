import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { addToCart, removeItems, decreaseCart } from "../../redux/cartSlice";

import styles from "./shoppingCard.style.module.scss";
import { BsFillTrashFill } from "react-icons/bs";

const ShoppingCard = () => {
  const cart = useSelector((state) => state.cart);
  const {cartTotalAmount} = useSelector((state)=>state.cart)
  console.log(cart);
  const dispatch = useDispatch();
  const handleRemoveItems = (cartItems) => {
    dispatch(removeItems(cartItems));
  };

  const handleDecrease = (cartItems) => {
    dispatch(decreaseCart(cartItems));
  };

  const handleIncrease = (cartItems) => {
    dispatch(addToCart(cartItems));
  };
  return (
    <div>
      <h4>Your Shopping Card</h4>
      {cart.cartItems.length === 0 ? (
        <div>
          <p>Your cart is currently empty</p>
          <Link to="/">
            <span>Start Shopping</span>
          </Link>
        </div>
      ) : (
        <div>
          <div className={styles.titles}>
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Total</h3>
          </div>
          <div>
            {cart.cartItems?.map((cartItems) => (
              <div key={cartItems.id} className={styles.products}>
                <div className={styles.products_child}>
                  <img src={cartItems.img}></img>
                </div>
                <div className={styles.products_child}>
                  <h4>{cartItems.title}</h4>
                  <button onClick={() => handleRemoveItems(cartItems)}>
                    <BsFillTrashFill />
                  </button>
                </div>
                <div className={styles.products_child}>{cartItems.price}$</div>

                <div className={styles.quantity}>
                  <button onClick={() => handleDecrease(cartItems)}>-</button>
                  <div>{cartItems.cartQuantity}</div>
                  <button onClick={() => handleIncrease(cartItems)}>+</button>

                  <div className={styles.total}>
                    {cartItems.price * cartItems.cartQuantity}$
                  </div>
                </div>
              </div>
            ))}
          </div>
          <span>Total amount: {cartTotalAmount} $ </span>
        </div>
      )}
    </div>
  );
};

export default ShoppingCard;
