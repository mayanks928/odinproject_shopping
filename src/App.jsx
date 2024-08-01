import "./App.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import ErrorPage from "./ErrorPage";
import BackGroundImage from "./assets/hhhorizon.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  return (
    <Router>
      <div
        style={{ "--image-url": `url(${BackGroundImage})` }}
        className=" min-h-svh bg-gray-200 bg-[image:var(--image-url)] h-100  p-1.5 mx-auto"
      >
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route index element={<MainSection />} />
            <Route
              path="/shop"
              element={
                <Shop
                  shoppingCart={shoppingCart}
                  setShoppingCart={setShoppingCart}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  shoppingCart={shoppingCart}
                  setShoppingCart={setShoppingCart}
                />
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
