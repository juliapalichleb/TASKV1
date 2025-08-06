import "./App.css";
import { type Product} from "./types/Product.ts";
import {ProductList} from "./components/ProductsList/ProductList.tsx";
import {useState} from "react";
import {ProductCreator} from "./components/ProductCreator/ProductCreator.tsx";


function App() {
  const [products, setProduct] = useState<Product[]>([]);

  return (
    <div
      style={{
        display: "flex",
        gap: "200px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <ProductCreator onAddProduct={(newProduct) => setProduct(prev => [...prev, newProduct])} />
      <ProductList allProducts={products}/>
    </div>
  );
}

export default App;