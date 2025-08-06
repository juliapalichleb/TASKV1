import "./App.css";
import { type Product} from "./components/Product/Product.ts";
import {ProductList} from "./components/ProductList/ProductList.tsx";
import {useState} from "react";
import {ProductCreator} from "./components/ProductCreator/ProductCreator.tsx";


function App() {
  const [products, setProduct] = useState<Product[]>([]);

  return (
    <div className="main-content-container">
      <ProductCreator onAddProduct={(newProduct) => setProduct(prev => [...prev, newProduct])} />
      <ProductList allProducts={products}/>
    </div>
  );
}

export default App;