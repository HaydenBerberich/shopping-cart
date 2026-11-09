//import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import { Outlet } from "react-router";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      setProducts(data);
    })();
  }, []);

  const addToCart = (id, quantity) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, quantity } : product,
      ),
    );
  };

  return (
    <>
      <NavBar products={products} />
      <Outlet context={{ products, addToCart }} />
    </>
  );
}

export default App;
