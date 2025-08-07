import type {Products} from "../Product/Product.ts";
import {ProductCard} from "./ProductCard.tsx";

const ProductList = ({ allProducts }: { allProducts: Products[] }) => {
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
