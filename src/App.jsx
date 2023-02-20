import React from "react";
import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import Display from "./pages/Display/Display";
import Checkout from "./pages/Checkout/Checkout";
import { CartProvider } from "./CartContext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <CartProvider>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Display />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Router>
        </CartProvider>
      </div>
    </div>
  );
}

export default App;
