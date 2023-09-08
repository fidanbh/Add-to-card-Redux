import "./App.css";
import Products from "./Components/Products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCard from "./Components/ShoppingCard/ShoppingCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products/>} />
          <Route path="/shoppingCard" element={<ShoppingCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
