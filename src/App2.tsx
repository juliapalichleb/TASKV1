import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [productType, setProductType] = useState("Soda");
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

  useEffect(() => {
    const button = document.getElementById("SubmitButton");
    if (productType === "Soda") {
      button!.style.setProperty("background", "#b82b1b");
      button!.style.setProperty("color", "white");
      button!.innerText = "Add Soda";
    } else if (productType === "Shampoo") {
      button!.style.setProperty("background", "#36ff3d");
      button!.style.setProperty("color", "#242424");
      button!.innerText = "Add Shampoo";
    } else if (productType === "Shoes") {
      button!.style.setProperty("background", "#19aad8");
      button!.style.setProperty("color", "#242424");
      button!.innerText = "Add Shoes";
    }
  }, [productType]);

  useEffect(() => {
    const form = document.getElementById("ProductForm");
    form!.onsubmit = (e) => {
      e.preventDefault();
      let newProduct;
      if (productType === "Soda") {
        newProduct = { name, price, brand, flavor, packageType, servingSize };
      } else if (productType === "Shampoo") {
        newProduct = { name, price, brand, scent, bottleSize };
      } else {
        newProduct = { name, price, brand, shoeSize, shoeColor, gender };
      }
      setAllProducts([...allProducts, newProduct]);
    };
  }, [
    name,
    price,
    brand,
    flavor,
    packageType,
    servingSize,
    scent,
    bottleSize,
    shoeSize,
    shoeColor,
    gender,
  ]);

  useEffect(() => {
    setName("");
    setPrice("");
    setBrand("");
    setFlavor("");
    setPackageType("");
    setServingSize("");
    setScent("");
    setBottleSize("");
    setShoeSize("");
    setShoeColor("");
    setGender("");
  }, [productType]);

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
        <label htmlFor="productType">
          <div>Product type</div>
          <select
            defaultValue={productType}
            id="productType"
            name={"productType"}
            onChange={(event) => setProductType(event.target.value)}
          >
            <option>Soda</option>
            <option>Shampoo</option>
            <option>Shoes</option>
          </select>
        </label>

        {/** Handle Soda  */}
        {productType === "Soda" && (
          <div>
            <div className={"flex flex-row"}>
              <label htmlFor={"name"} style={{ marginRight: "0.5rem" }}>
                <div>
                  <span style={{ color: "red" }}>* </span>Name
                </div>
                <input
                  value={name}
                  id={"name"}
                  name={"name"}
                  onChange={(event) => setName(event.target.value)}
                />
              </label>
              <label htmlFor={"price"}>
                <div>
                  <span style={{ color: "red" }}>* </span>Price
                </div>
                <input
                  defaultValue={price}
                  id={"price"}
                  name={"price"}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </label>
            </div>
            <div className={"flex flex-row"}>
              <label htmlFor={"brand"} style={{ marginRight: "0.5rem" }}>
                <div>Brand</div>
                <input
                  value={brand}
                  id={"brand"}
                  name={"brand"}
                  onChange={(event) => setBrand(event.target.value)}
                />
              </label>
              <label htmlFor={"flavor"} style={{ marginRight: "0.5rem" }}>
                <div>Flavor</div>
                <input
                  value={flavor}
                  name={"flavor"}
                  id={"flavor"}
                  onChange={(event) => setFlavor(event.target.value)}
                />
              </label>
            </div>
            <div className={"flex flex-row"}>
              <label htmlFor="packageType" style={{ marginRight: "0.5rem" }}>
                <div>
                  <span style={{ color: "red" }}>* </span>Package type
                </div>
                <select
                  defaultValue={packageType}
                  id={"packageType"}
                  name={"packageType"}
                  onChange={(event) => setPackageType(event.target.value)}
                >
                  <option>Can</option>
                  <option>Plastic Bottle</option>
                  <option>Glass Bottle</option>
                </select>
              </label>
              <label htmlFor={"servingSize"} style={{ marginRight: "0.5rem" }}>
                <div>Serving Size</div>
                <input
                  value={servingSize}
                  id={"servingSize"}
                  name={"servingSize"}
                  onChange={(event) => setServingSize(event.target.value)}
                />
              </label>
            </div>
          </div>
        )}

        {/** Handle Shampoo  */}
        {productType === "Shampoo" && (
          <div>
            <div className={"flex flex-row"}>
              <label htmlFor={"name"} style={{ marginRight: "0.5rem" }}>
                <div>
                  <span style={{ color: "red" }}>* </span>Name
                </div>
                <input
                  value={name}
                  id={"name"}
                  name={"name"}
                  onChange={(event) => setName(event.target.value)}
                />
              </label>
              <label htmlFor={"price"}>
                <div>
                  <span style={{ color: "red" }}>* </span>Price
                </div>
                <input
                  defaultValue={price}
                  id={"price"}
                  name={"price"}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </label>
            </div>
            <div className={"flex flex-row"}>
              <label htmlFor={"brand"} style={{ marginRight: "0.5rem" }}>
                <div>Brand</div>
                <input
                  value={brand}
                  name={"brand"}
                  id={"brand"}
                  onChange={(event) => setBrand(event.target.value)}
                />
              </label>
              <label htmlFor={"scent"} style={{ marginRight: "0.5rem" }}>
                <div>Scent</div>
                <input
                  value={scent}
                  id={"scent"}
                  name={"scent"}
                  onChange={(event) => setScent(event.target.value)}
                />
              </label>
            </div>
            <div className={"flex flex-row"}>
              <label htmlFor={"bottleSize"} style={{ marginRight: "0.5rem" }}>
                <div>
                  <span style={{ color: "red" }}>* </span>Bottle Size
                </div>
                <input
                  value={bottleSize}
                  name={"bottleSize"}
                  id={"bottleSize"}
                  onChange={(event) => setBottleSize(event.target.value)}
                />
              </label>
            </div>
          </div>
        )}

        {/** Handle Shoes  */}
        {productType === "Shoes" && (
          <div>
            <div className={"flex flex-row"}>
              <label htmlFor={"name"} style={{ marginRight: "0.5rem" }}>
                <div>
                  <span style={{ color: "red" }}>* </span>Name
                </div>
                <input
                  value={name}
                  name={"name"}
                  id={"name"}
                  onChange={(event) => setName(event.target.value)}
                />
              </label>
              <label htmlFor={"price"}>
                <div>
                  <span style={{ color: "red" }}>* </span>Price
                </div>
                <input
                  defaultValue={price}
                  id={"price"}
                  name={"price"}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </label>
            </div>
            <div className={"flex flex-row"}>
              <label htmlFor={"brand"} style={{ marginRight: "0.5rem" }}>
                <div>Brand</div>
                <input
                  value={brand}
                  id={"brand"}
                  name={"brand"}
                  onChange={(event) => setBrand(event.target.value)}
                />
              </label>
              <label htmlFor={"shoeSize"} style={{ marginRight: "0.5rem" }}>
                <div>Shoe size</div>
                <input
                  value={shoeSize}
                  name={"shoeSize"}
                  id={"shoeSize"}
                  onChange={(event) => setShoeSize(event.target.value)}
                />
              </label>
            </div>
            <div className={"flex flex-row"}>
              <label htmlFor={"shoeColor"} style={{ marginRight: "0.5rem" }}>
                <div>Shoe color</div>
                <input
                  value={shoeColor}
                  name={"shoeColor"}
                  id={"shoeColor"}
                  onChange={(event) => setShoeColor(event.target.value)}
                />
              </label>
              <label htmlFor="gender">
                <div>Gender</div>
                <select
                  defaultValue={gender}
                  name={"gender"}
                  id={"gender"}
                  onChange={(event) => setGender(event.target.value)}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Unisex</option>
                </select>
              </label>
            </div>
          </div>
        )}
        <button id={"SubmitButton"} className={"btn"} type={"submit"}>
          Add Shoes
        </button>
      </form>
      <div
        className={"flex flex-col product-container"}
        style={{ gap: "1rem" }}
      >
        {allProducts.map((product) => {
          return (
            <div className="product-card">
              <span className="product-name">{product.name}</span>
              {product.flavor && (
                <>
                  - <span>{product.flavor}</span>
                </>
              )}
              {product.scent && (
                <>
                  - <span>{product.scent}</span>
                </>
              )}
              <p className="product-brand">Brand: {product.brand}</p>
              {product.packageType && product.servingSize && (
                <div className="product-brand">
                  Size: {product.packageType}, {product.servingSize}
                </div>
              )}
              {product.bottleSize && (
                <div className="product-info">Size: {product.bottleSize}</div>
              )}
              {product.shoeSize && (
                <div className="product-info">
                  Size: {product.shoeSize} ( European )
                </div>
              )}
              {product.shoeColor && (
                <div className="product-info">Color: {product.shoeColor}</div>
              )}
              {product.gender && (
                <div className="product-info">Gender: {product.gender}</div>
              )}
              Price: <span className="product-price">{product.price}$</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
