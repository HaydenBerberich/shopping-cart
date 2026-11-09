import { Link } from "react-router";
import styles from "./NavBar.module.css";

const total = (products) =>
  products.reduce((total, product) => total + (product.quantity || 0), 0);

export default function NavBar({ products }) {
  return (
    <nav>
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <Link to="/shop" className={styles.link}>
        Shop
      </Link>
      <Link to="/cart" className={styles.link}>
        Cart {total(products) ? `(${total(products)})` : null}
      </Link>
    </nav>
  );
}
