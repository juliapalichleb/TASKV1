import type {Product} from "../../types/Product.ts";
import {ProductCard} from "./ProductCard.tsx";

const ProductList = ({ allProducts }: { allProducts: Product[] }) => {
  return (
    <div className="flex flex-col product-container gap-x-2">
      {allProducts.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
        />
      ))}
    </div>
  );
};

export { ProductList };
