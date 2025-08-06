import {useState} from "react";
import {CustomSelect} from "../controls/CustomSelect";
import {
  type Product, productFactory,
  ProductType,
  ProductTypeDisplayNames,

} from "../Product/Product.ts";


type ProductCreatorProps = {
  onAddProduct: (product: Product) => void;
};

const ProductCreator = ({ onAddProduct }: ProductCreatorProps) => {
  const [productType, setProductType] = useState<ProductType>(ProductType.Soda);

  const productOptions = Object.values(ProductType).map((type) => ({
    value: type,
    displayName: ProductTypeDisplayNames[type],
  }));

  const {FormComponent} = productFactory[productType]

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

      <FormComponent onAdd={(p) => onAddProduct(p)}/>
    </div>
  );
};

export { ProductCreator };
