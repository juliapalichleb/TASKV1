import {useEffect, useState} from "react";
import "./App.css";
import {SodaForm} from "./components/forms/SodaForm.tsx";
import {ShoeForm} from "./components/forms/ShoeForm.tsx";
import {ShampooForm} from "./components/forms/ShampooForm.tsx";
import {type Product, ProductType, ProductTypeDisplayNames} from "./types/Product.ts";
import {CustomSelect} from "./components/controls/CustomSelect.tsx";



function App() {
  const [productType, setProductType] = useState<ProductType>(ProductType.Soda);
  const btnClass = getButtonClass(productType);

  const productOptions = Object.values(ProductType).map((type) => ({
    value: type,
    displayName: ProductTypeDisplayNames[type],
  }));
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [flavor, setFlavor] = useState("");
  const [packageType, setPackageType] = useState("");
  const [servingSize, setServingSize] = useState("");
  const [scent, setScent] = useState("");
  const [bottleSize, setBottleSize] = useState("");
  const [shoeSize, setShoeSize] = useState("");
  const [shoeColor, setShoeColor] = useState("");
  const [gender, setGender] = useState("");


  // useEffect(() => {
  //   const form = document.getElementById("ProductForm");
  //   form!.onsubmit = (e) => {
  //     e.preventDefault();
  //     let newProduct;
  //     if (productType === "Soda") {
  //       newProduct = { name, price, brand, flavor, packageType, servingSize };
  //     } else if (productType === "Shampoo") {
  //       newProduct = { name, price, brand, scent, bottleSize };
  //     } else {
  //       newProduct = { name, price, brand, shoeSize, shoeColor, gender };
  //     }
  //     setAllProducts([...allProducts, newProduct]);
  //   };
  // }, [
  //   name,
  //   price,
  //   brand,
  //   flavor,
  //   packageType,
  //   servingSize,
  //   scent,
  //   bottleSize,
  //   shoeSize,
  //   shoeColor,
  //   gender,
  // ]);
  //



  function submitForm() {
console.log("submit");
  }

function getButtonClass(product: ProductType): 'green' | 'red' | 'blue' {
    switch (product) {
      case ProductType.Soda:
        return "green"
      case ProductType.Shampoo:
        return 'red'
      case ProductType.Shoe:
        return "blue"
    }
}
  return (
    <div
      style={{
        display: "flex",
        gap: "200px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        id={"ProductForm"}
        style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
      >
        <CustomSelect
          id="productType"
          label="Product Type"
          value={productType}
          options={productOptions}
          onChange={(e) => setProductType(e.target.value)}
        />

        {/** Handle Soda  */}
        {productType === ProductType.Soda && (
         <SodaForm data={{}} onChange={() => {}}/>
        )}

        {/** Handle Shampoo  */}
        {productType === ProductType.Shampoo && (
         <ShampooForm data={{}} onChange={() => {}}/>
        )}

        {/** Handle Shoes  */}
         {productType === ProductType.Shoe && (
          <ShoeForm data={{}} onChange={() => {}}/>
        )}
        <button id={"SubmitButton"} className={`btn ${btnClass}`} type={"submit"} onClick={submitForm}>
          {"Add "} {ProductTypeDisplayNames[productType]}
        </button>
      </form>
      <div>
        ..dsdsds..
      </div>

    </div>
  );
}

export default App;
