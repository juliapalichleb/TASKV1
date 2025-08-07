import {ProductCard} from "./ProductCard.tsx";
import type {Product, ProductType} from "../Product/Product.ts";

const ProductList = ({ allProducts }: { allProducts: Product<ProductType>[] }) => {
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
