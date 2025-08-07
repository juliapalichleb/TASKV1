import type {Product, ProductType} from "../Product/Product.ts";


type ProductCardProps = {
  product: Product<ProductType>;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const ProductTemplate = product.getTemplateComponent();
  return (
    <div className="product-card">
      <ProductTemplate details={product.details} />
    </div>
  );
};

export {ProductCard}