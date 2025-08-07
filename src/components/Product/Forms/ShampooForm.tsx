import { useState } from "react";
import { CustomInput } from "../../controls/CustomInput.tsx";
import {ProductType } from "../Product.ts";
import type {ShampooDto} from "../Shampoo.ts";


const ShampooForm = ({onAdd}: {onAdd: (product: { type: ProductType.Shampoo, details: ShampooDto }) => void }) => {
  const [shampoo, setShampoo] = useState<ShampooDto>({
    name: "",
    price: "",
  });

  const handleChange = <K extends keyof ShampooDto>(field: K, value: ShampooDto[K]) => {
    setShampoo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Shampoo submitted:", shampoo);
    onAdd({type: ProductType.Shampoo, details: shampoo})
  };

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-4">
      <div className="flex gap-x-2">
        <CustomInput
          id="name"
          label="Name"
          value={shampoo.name}
          required
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <CustomInput
          id="price"
          label="Price"
          value={shampoo.price}
          required
          onChange={(e) => handleChange("price", e.target.value)}
        />
      </div>

      <div className="flex gap-x-2">
        <CustomInput
          id="brand"
          label="Brand"
          value={shampoo.brand}
          onChange={(e) => handleChange("brand", e.target.value)}
        />
        <CustomInput
          id="scent"
          label="Scent"
          value={shampoo.scent}
          onChange={(e) => handleChange("scent", e.target.value)}
        />
      </div>

      <div className="flex gap-x-2">
        <CustomInput
          id="bottleSize"
          label="Bottle Size"
          value={shampoo.bottleSize}
          required
          onChange={(e) => handleChange("bottleSize", e.target.value)}
        />
      </div>

      <button className="btn btn-primary col-span-2" onClick={handleSubmit}>
        Add Shampoo
      </button>
    </div>
  );
};

export { ShampooForm };
