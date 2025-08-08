import {type JSX, useState} from "react";
import { CustomInput } from "../../controls/CustomInput.tsx";
import { CustomSelect } from "../../controls/CustomSelect.tsx";
import {ShoeFormFactory} from "../Factory/Shoe/ShoeFormFactory.tsx";
import type {ShoeDto} from "../../../types/Shoe.ts";
import {Gender, GenderTypeDisplayNames} from "../../../types/Gender.ts";

const ShoeFormTemplate = ({ onAdd }: { readonly onAdd: (p: ShoeDto) => void }): JSX.Element => {
  const shoe = new ShoeFormFactory()
  const [form, setForm] = useState<ShoeDto>(shoe.clearForm());
  const setField = <K extends keyof ShoeDto>(k: K, v: ShoeDto[K]) =>
    setForm(prev => ({ ...prev, [k]: v }));
  const genderOptions = Object.values(Gender).map((type) => ({
    value: type,
    displayName: GenderTypeDisplayNames[type],
  }));


  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-4">
      <div className="flex gap-x-2">
        <CustomInput
          id="name"
          label="Name"
          value={form.name}
          required
          onChange={(e) => setField("name", e.target.value)}
        />
        <CustomInput
          id="price"
          label="Price"
          value={form.price}
          required
          onChange={(e) => setField("price", e.target.value)}
        />
      </div>

      <div className="flex gap-x-2">
        <CustomInput
          id="brand"
          label="Brand"
          value={form.brand}
          onChange={(e) => setField("brand", e.target.value)}
        />
        <CustomInput
          id="shoeSize"
          label="Shoe Size"
          value={form.shoeSize}
          onChange={(e) => setField("shoeSize", e.target.value)}
        />
      </div>

      <div className="flex gap-x-2">
        <CustomInput
          id="shoeColor"
          label="Shoe Color"
          value={form.shoeColor}
          onChange={(e) => setField("shoeColor", e.target.value)}
        />
        <CustomSelect
          id="gender"
          label="Gender"
          value={form.gender}
          options={genderOptions}
          onChange={(value) => setField("gender", value)}
        />
      </div>

      <button
          className="btn btn-primary col-span-2"
          onClick={() => { onAdd(form); setForm(shoe.clearForm()); }}
      >
        Add Shoe
      </button>
    </div>
  );
};

export { ShoeFormTemplate };
