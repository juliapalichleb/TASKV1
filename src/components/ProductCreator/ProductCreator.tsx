import {useState} from "react";
import {CustomSelect} from "../controls/CustomSelect";
import {
   ProductFactory, type Products,
  ProductType,
  ProductTypeDisplayNames,

} from "../Product/Product.ts";


type ProductCreatorProps = {
  onAddProduct: (product: Products) => void;
};

const ProductCreator = ({ onAddProduct }: ProductCreatorProps) => {
  const [productType, setProductType] = useState<ProductType>(ProductType.Soda);

  const productOptions = Object.values(ProductType).map((type) => ({
    value: type,
    displayName: ProductTypeDisplayNames[type],
  }));

  const productEl = ProductFactory.createProduct(productType)
  const ProductForm = productEl.getFormComponent();

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
