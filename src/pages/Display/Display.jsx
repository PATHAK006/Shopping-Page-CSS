import React, { useState, useContext } from "react";
import styles from "./display.module.css";
import { Products } from "../../Products";
import cartIcon from "../../assets/shoppingCart.svg";
import CartContext from "../../CartContext";
const Display = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className={styles.products__main}>
      {Products.map((product) => {
        return (
          <div className={styles.product__list}>
            <div className={styles.products__image}>
              <img src={product.image.prod} alt="Prod_Image" />
            </div>
            <div className={styles.product__name__cart}>
              <span className={styles.product__name}>
                <h3>
                  <b>{product.productName}</b>
                </h3>
              </span>
              <span className={styles.product__cart}>
                <img src={cartIcon} alt="CartIcon" />
              </span>
            </div>
            <div className={styles.price}>
              <p>{product.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Display;
