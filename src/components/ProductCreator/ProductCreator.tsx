import {useState} from "react";
import {CustomSelect} from "../controls/CustomSelect";
import {
  ProductRegistry, type ProductType, ProductTypeDisplayNames,
} from "../Product/Product.ts";
import type {Product} from "../Product/Product.ts";


type ProductCreatorProps = {
  onAddProduct: (product: Product<ProductType>) => void;
};

const ProductCreator = ({ onAddProduct }: ProductCreatorProps) => {
  const [productType, setProductType] = useState<ProductType>("soda" );


const productOptions = (Object.entries(ProductTypeDisplayNames) )
  .map(([value , displayName]): {value: ProductType, displayName: string} => ({
    value ,
    displayName,
  }));

  const ProductClass = new ProductRegistry[productType];
  const ProductForm = ProductClass.getFormComponent();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
    >
      <CustomSelect
        id="productType"
        label="Product Type"
        value={productType}
        options={productOptions}
        onChange={(e) => setProductType(e)}
      />

      <ProductForm onAdd={(p) => onAddProduct(p)}/>
    </div>
  );
};

export { ProductCreator };
