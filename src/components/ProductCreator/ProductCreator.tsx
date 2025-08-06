import {useState} from "react";
import {CustomSelect} from "../controls/CustomSelect";
import {CustomInput} from "../controls/CustomInput";
import {SodaForm} from "./forms/SodaForm";
import {ShampooForm} from "./forms/ShampooForm";
import {ShoeForm} from "./forms/ShoeForm";
import {
    GenderType,
    type Product,
    ProductType,
    ProductTypeDisplayNames,
    type ShampooDto,
    type ShoesDto,
    type SodaDto,
    SodaType,
} from "../../types/Product";

type ProductCreatorProps = {
  onAddProduct: (product: Product) => void;
};

const ProductCreator = ({ onAddProduct }: ProductCreatorProps) => {
  const [productType, setProductType] = useState<ProductType>(ProductType.Soda);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const [sodaState, setSodaState] = useState<SodaDto>({
    packageType: SodaType.Can,
  });

  const [shampooState, setShampooState] = useState<ShampooDto>({});

  const [shoeState, setShoeState] = useState<ShoesDto>({
    gender: GenderType.Male,
  });


  const onSubmit = () => {
    switch (productType) {
      case ProductType.Soda:
        onAddProduct({
          type: ProductType.Soda,
          name,
          price,
          details: sodaState,
        });
        break;
      case ProductType.Shampoo:
        onAddProduct({
          type: ProductType.Shampoo,
          name,
          price,
          details: shampooState,
        });
        break;
      case ProductType.Shoe:
        onAddProduct({
          type: ProductType.Shoe,
          name,
          price,
          details: shoeState,
        });
        break;
    }

  };

  const btnClass = getButtonClass(productType);

  const productOptions = Object.values(ProductType).map((type) => ({
    value: type,
    displayName: ProductTypeDisplayNames[type],
  }));

  function getButtonClass(product: ProductType): "green" | "red" | "blue" {
    switch (product) {
      case ProductType.Soda:
        return "green";
      case ProductType.Shampoo:
        return "red";
      case ProductType.Shoe:
        return "blue";
    }
  }

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

      <div className="flex gap-x-2">
        <CustomInput
          id="name"
          label="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <CustomInput
          id="price"
          label="Price"
          value={price}
          required
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      {productType === ProductType.Soda && (
        <SodaForm
          data={sodaState}
          onChange={(field, value) => setSodaState(prevState => ({ ...prevState, [field]: value }))}
        />
      )}

      {productType === ProductType.Shampoo && (
        <ShampooForm
          data={shampooState}
           onChange={(field, value) => setShampooState(prevState => ({ ...prevState, [field]: value }))}
        />
      )}

      {productType === ProductType.Shoe && (
        <ShoeForm
          data={shoeState}
           onChange={(field, value) => setShoeState(prevState => ({ ...prevState, [field]: value }))}
        />
      )}

      <button className={`btn ${btnClass}`} onClick={onSubmit}>
        Add {ProductTypeDisplayNames[productType]}
      </button>
    </div>
  );
};

export { ProductCreator };
