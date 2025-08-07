import {ProductFactory, type Products} from "../Product/Product.ts";


const ProductCard = ({product}: {product: Products}) => {;
  const productEl = ProductFactory.createProduct(product.type)
  const ProductTemplate = productEl.getTemplateComponent();

  return (
      <div className="product-card">
          <ProductTemplate details={product.details}/>
      </div>
  );
};

export {ProductCard};
