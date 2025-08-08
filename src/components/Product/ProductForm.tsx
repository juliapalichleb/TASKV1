import {CustomSelect} from "../controls/CustomSelect.tsx";
import {useState} from "react";
import { ProductFactory} from "./Factory/ProductFactory.ts";
import {type Product, ProductKind, ProductTypeDisplayNames} from "../../types/Product.ts";

function ProductForm({ onAdd }: { readonly onAdd: (p: Product) => void }) {
    const [productType, setProductType] = useState<ProductKind>(ProductKind.Soda);

    const {createForm} = new ProductFactory();
    const productForm = createForm(productType)

    const productOptions = Object.values(ProductKind).map((type) => ({
    value: type,
    displayName: ProductTypeDisplayNames[type],
    }));


  return (
      <div className="flex flex-col gap-y-2" onSubmit={e => e.preventDefault()}>
       <CustomSelect
        id="productType"
        label="Product Type"
        value={productType}
        options={productOptions}
        onChange={(e) => setProductType(e)}
      />
        {productForm.createRenderForm(onAdd)}
      </div>
  );
}

export {ProductForm};