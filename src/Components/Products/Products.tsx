import React, { createContext } from "react";

import Basket from "../Basket/Basket";
import Cards from "../Cards/Cards";

export const ThemeContext = createContext(undefined);

const Products = () => {
  //const increment = dispatch(increment())
  // const getId = () => {
  //   // console.log(item.target.id);
  //   // let btn = item.target.id;
  //   // console.log(btn)
  //   const item={
  //     id,
  //   }
  // };

  const contextObj = {
    // getId,
  };

  return (
    <>
      <ThemeContext.Provider value={contextObj}>
        <div>
          <h2>My shopping products</h2>
          <Basket />
          <Cards />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default Products;
