import {type Product, productFactory} from "../Product/Product.ts";


const ProductCard = ({product}: {product: Product}) => {
    const { TemplateComponent } = productFactory[product.type];
  return (
      <div className="product-card">
          <TemplateComponent details={product.details} />
      </div>
  );
};

export {ProductCard};
