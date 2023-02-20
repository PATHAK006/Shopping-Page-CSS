import React, { useContext } from "react";
import styles from "./navbar.module.css";
import cartIcon from "../../assets/shoppingCart.svg";
import { Link } from "react-router-dom";
import CartContext from "../../CartContext";

const NavBar = () => {
  const { items } = useContext(CartContext);

  return (
    <div className={styles.nav__main}>
      <div className={styles.nav_sub_main}>
        <span className={styles.nav__title}>
          <h2>
            <Link to="/" className={styles.nav__link}>
              <b>Wear</b>
            </Link>
          </h2>
        </span>
        <span className={styles.nav__icon}>
          <Link to="/checkout">
            {" "}
            <img src={cartIcon} alt="cart-icon" />
            <span className={styles.cartItems}>{items.length}</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
