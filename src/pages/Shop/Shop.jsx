import { useOutletContext } from "react-router";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import styles from "./Shop.module.css";

export default function Shop() {
  const { products, addToCart } = useOutletContext();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shop</h1>
      <div className={styles.products}>
        {products.map((product) => (
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
