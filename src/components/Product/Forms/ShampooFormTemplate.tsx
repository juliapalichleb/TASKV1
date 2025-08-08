import {type JSX, useState} from "react";
import { CustomInput } from "../../controls/CustomInput.tsx";
import type {ShampooDto} from "../../../types/Shampoo.ts";
import {ShampooFormFactory} from "../Factory/Shampoo/ShampooFormFactory.tsx";
import {ShampooValidator} from "../../../validation/shampooSchema.ts";

const ShampooFormTemplate = ({ onAdd }: { readonly onAdd: (p: ShampooDto) => void }): JSX.Element => {
    const shampoo = new ShampooFormFactory
    const [form, setForm] = useState<ShampooDto>(shampoo.clearForm());
    const setField = <K extends keyof ShampooDto>(k: K, v: ShampooDto[K]) =>
      setForm(prev => ({ ...prev, [k]: v }));

  function onAddShampoo() {
      const validator = new ShampooValidator(form)
      const validationResult = validator.validate()

      if (validationResult.valid) {
          onAdd(form);
          setForm(shampoo.clearForm());
      } else {
          alert(validationResult.errors.map(e => e.message).join("\n"));
      }
  }


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
          id="scent"
          label="Scent"
          value={form.scent}
          onChange={(e) => setField("scent", e.target.value)}
        />
      </div>

      <div className="flex gap-x-2">
        <CustomInput
          id="bottleSize"
          label="Bottle Size"
          value={form.bottleSize}
          required
          onChange={(e) => setField("bottleSize", e.target.value)}
        />
      </div>

      <button
          className="btn btn-primary col-span-2"
          onClick={onAddShampoo}
      >
        Add Shampoo
      </button>
    </div>
  );
};

export { ShampooFormTemplate };
