import { useOutletContext } from "react-router";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import styles from "./Cart.module.css";

export default function Cart() {
  const { products, addToCart } = useOutletContext();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cart</h1>
      <div className={styles.products}>
        {products
          .filter((product) => product.quantity > 0)
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
      </div>
    </div>
  );
}
