import { useState } from "react";
import styles from "./ProductCard.module.css";
import { useLocation } from "react-router";

export default function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(product.quantity ?? 0);
  const location = useLocation();

  return (
    <div className={styles.card}>
      <img src={product.image} alt="Product" className={styles.image} />
      <div className={styles.details}>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.price}>${product.price}</p>
      </div>
      <div className={styles.cart}>
        <label htmlFor="quantity">Quantity: </label>
        <input
          id="quantity"
          type="number"
          className={styles.input}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => setQuantity((prev) => Number(prev) + 1)}
        >
          +
        </button>
        <button
          className={styles.button}
          onClick={() => setQuantity((prev) => Number(prev) - 1)}
        >
          -
        </button>
        <button
          className={styles.button}
          onClick={() => addToCart(product.id, quantity)}
        >
          {location.pathname === "/cart" ? "Update" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
