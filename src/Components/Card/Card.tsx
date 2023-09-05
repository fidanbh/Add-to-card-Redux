import React, { useState, useContext } from "react";
import Button from "../Button/Button";
import styles from "./card.style.module.scss";
import { ThemeContext } from "../Products/Products";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import addingSlice from "../../redux/addingSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const data = [
    {
      id: 1,
      img: "https://cdn.dsmcdn.com/ty968/product/media/images/20230719/19/395101618/508300516/2/2_org.jpg",
      title: "Koza carpet",
      price: 55,
    },
    {
      id: 2,
      img: "https://cdn.dsmcdn.com/ty945/product/media/images/20230609/9/383776467/906117208/1/1_org.jpg",
      title: "Puffy bed",
      price: 60,
    },
    {
      id: 3,
      img: "https://cdn.dsmcdn.com/ty957/product/media/images/20230626/9/389277800/248243039/1/1_org.jpg",
      title: "Lazzy table",
      price: 75,
    },
    {
      id: 4,
      img: "https://cdn.dsmcdn.com/ty977/product/media/images/20230803/12/399756536/985842606/1/1_org.jpg",
      title: "Svippy chair",
      price: 80,
    },
    {
      id: 5,
      img: "https://cdn.dsmcdn.com/ty164/product/media/images/20210825/16/122470237/206785014/1/1_org.jpg",
      title: "Twist swing",
      price: 25,
    },
    {
      id: 6,
      img: "https://cdn.dsmcdn.com/ty696/product/media/images/20230123/16/263955107/430200814/1/1_org.jpg",
      title: "Garden table",
      price: 65,
    },
    {
      id: 7,
      img: "https://cdn.dsmcdn.com/ty582/product/media/images/20221101/0/204500947/576509100/1/1_org.jpg",
      title: "Lux living table",
      price: 80,
    },
    {
      id: 8,
      img: "https://cdn.dsmcdn.com/ty611/product/media/images/20221124/10/220542294/494443851/1/1_org.jpg",
      title: "Modalanka cupboard",
      price: 60,
    },
    {
      id: 9,
      img: "https://cdn.dsmcdn.com/ty583/product/media/images/20221031/18/204342691/606594677/1/1_org.jpg",
      title: "Sertex Home",
      price: 90,
    },
    {
      id: 10,
      img: "https://cdn.dsmcdn.com/ty224/product/media/images/20211104/16/165619806/288141194/1/1_org.jpg",
      title: "Egecan Mobilya",
      price: 75,
    },
    {
      id: 11,
      img: "https://cdn.dsmcdn.com/ty892/product/media/images/20230520/11/353169161/662299191/1/1_org.jpg",
      title: "Egecan Sofa",
      price: 55,
    },
    {
      id: 12,
      img: "https://cdn.dsmcdn.com/ty904/product/media/images/20230524/13/358131666/631697206/1/1_org.jpg",
      title: "Karaca Home",
      price: 60,
    },
  ];

  const [state, setState] = useState(data);
  const theme = useContext(ThemeContext);
  const { getId } = theme;
  const dispatch = useDispatch();
 const navigate = useNavigate()
  const states = useSelector((state) => console.log(state));
  console.log(states);
  // const getId = () => {
  //     // console.log(item.target.id);
  //     // let btn = item.target.id;

  //   };

  const handleAddToCard = (item) => {
    dispatch(addToCart(item));
    //navigate.push("/basket");
    console.log(1);
  };

 
  return (
    <div className={styles.card}>
      <ToastContainer />
      {state.map((item) => (
        <div key={item.id}>
          <img src={item.img} className={styles.card_img}></img>
          <h4>{item.title}</h4>
          <span>{item.price} $</span>
          <Button
            text="Add to Card"
            btn_add={styles.btn_add}
            id={item.id}
            getId={() => handleAddToCard(item)}
          />
        </div>
      ))}
    </div>
  );
};

export default Card;
