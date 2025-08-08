import {useState} from "react";
import type {Product} from "../components/Product/Factory/ProductFactory.ts";

function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);


 const createProduct = (payload: Product): void => {
    setProducts(prev => [payload, ...prev]);
  };

  return { products, createProduct };
}

export { useProducts }