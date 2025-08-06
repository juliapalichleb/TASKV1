
import { ShoeTemplate } from "./ProductTemplate/ShoeTemplate.tsx";
import {type Product, ProductType} from "../../types/Product.ts";
import {ShampooTemplate} from "./ProductTemplate/ShampooTemplate.tsx";
import {SodaTemplate} from "./ProductTemplate/SodaTemplate.tsx";


const ProductCard = ({product}: {product: Product}) => {
  return (
    <div className="product-card">
      <span className="product-name">{product.name}</span>

      {product.type === ProductType.Shoe && <ShoeTemplate details={product.details} />}
      {product.type === ProductType.Shampoo && <ShampooTemplate details={product.details} />}
      {product.type === ProductType.Soda && <SodaTemplate details={product.details} />}


      <span className="product-price">Price: {product.price}$</span>
    </div>
  );
};

export { ProductCard };
