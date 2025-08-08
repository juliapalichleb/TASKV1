import "./App.css";
import {
  type Product, ProductFactory,
  ProductKind,
  ProductTypeDisplayNames,
} from "./components/Product/Product.ts";
import {useState} from "react";
import {CustomSelect} from "./components/controls/CustomSelect.tsx";



function App() {
  const [productType, setProductType] = useState<ProductKind>(ProductKind.Soda);
  const [allProducts, setAllProducts] = useState<readonly Product[]>([]);

 const {createForm} = new ProductFactory();
const productForm = createForm(productType)

  const onAdd = (payload: ReturnType<typeof productForm.buildItem>): void => {
    setAllProducts(prev => [payload, ...prev]);
  };

   const productOptions = Object.values(ProductKind).map((type) => ({
    value: type,
    displayName: ProductTypeDisplayNames[type],
    }));


  return (
    <div style={{ display: "flex", gap: "200px", justifyContent: "center", alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }} onSubmit={e => e.preventDefault()}>
       <CustomSelect
        id="productType"
        label="Product Type"
        value={productType}
        options={productOptions}
        onChange={(e) => setProductType(e)}
      />
        {productForm.renderForm(onAdd)}
      </div>


      <div className="flex flex-col product-container" style={{ gap: "1rem" }}>
        {allProducts.map((product, index) => {
          const {createItem} = new ProductFactory();
          const productItem = createItem(product)

          return (
            <div key={index}>
              {productItem.renderItem()}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;