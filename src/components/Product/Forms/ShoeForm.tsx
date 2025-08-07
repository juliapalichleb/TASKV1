import { useState } from "react";
import { CustomInput } from "../../controls/CustomInput.tsx";
import { CustomSelect } from "../../controls/CustomSelect.tsx";
import {
    ProductType
} from "../Product.ts";
import {Gender, GenderTypeDisplayNames} from "../../../types/Gender.ts";
import type {ShoeDto} from "../Shoe.ts";

const ShoeForm = ({onAdd}: {onAdd: (product: { type: ProductType.Shoe, details: ShoeDto }) => void }) => {
  const [shoe, setShoe] = useState<ShoeDto>({
    name: "",
    price: "",
    gender: Gender.Female,
  });

  const genderOptions = Object.values(Gender).map((type) => ({
    value: type,
    displayName: GenderTypeDisplayNames[type],
  }));

  const handleChange = <K extends keyof ShoeDto>(field: K, value: ShoeDto[K]) => {
    setShoe((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    onAdd({type: ProductType.Shoe, details: shoe})
  };

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-4">
      <div className="flex gap-x-2">
        <CustomInput
          id="name"
          label="Name"
          value={shoe.name}
          required
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <CustomInput
          id="price"
          label="Price"
          value={shoe.price}
          required
          onChange={(e) => handleChange("price", e.target.value)}
        />
      </div>

      <div className="flex gap-x-2">
        <CustomInput
          id="brand"
          label="Brand"
          value={shoe.brand}
          onChange={(e) => handleChange("brand", e.target.value)}
        />
        <CustomInput
          id="shoeSize"
          label="Shoe Size"
          value={shoe.shoeSize}
          onChange={(e) => handleChange("shoeSize", e.target.value)}
        />
      </div>

      <div className="flex gap-x-2">
        <CustomInput
          id="shoeColor"
          label="Shoe Color"
          value={shoe.shoeColor}
          onChange={(e) => handleChange("shoeColor", e.target.value)}
        />
        <CustomSelect
          id="gender"
          label="Gender"
          value={shoe.gender}
          options={genderOptions}
          onChange={(value) => handleChange("gender", value)}
        />
      </div>

      <button className="btn btn-primary col-span-2" onClick={handleSubmit}>
        Add Shoe
      </button>
    </div>
  );
};

export { ShoeForm };
