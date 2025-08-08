import {type JSX, useState} from "react";
import { CustomInput } from "../../controls/CustomInput.tsx";
import { CustomSelect } from "../../controls/CustomSelect.tsx";
import {SodaFormFactory} from "../Factory/Soda/SodaFormFactory.tsx";
import type {SodaDto} from "../../../types/Soda.ts";
import {SodaPackage, SodaPackageDisplayNames} from "../../../types/SodaPackage.ts";


const SodaFormTemplate = (({ onAdd }: { readonly onAdd: (p: SodaDto) => void }): JSX.Element => {
    const soda = new SodaFormFactory();
    const [form, setForm] = useState<SodaDto>(soda.clearForm());
    const setField = <K extends keyof SodaDto>(k: K, v: SodaDto[K]) =>
      setForm(prev => ({ ...prev, [k]: v }));

    const sodaOptions = Object.values(SodaPackage).map((type) => ({
    value: type,
    displayName: SodaPackageDisplayNames[type],
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
          id="flavor"
          label="Flavor"
          value={form.flavor}
          onChange={(e) => setField("flavor", e.target.value)}
        />
      </div>

      <div className="flex gap-x-2">
        <CustomSelect
          id="packageType"
          label="Package Type"
          value={form.packageType}
          options={sodaOptions}
          onChange={(val) => setField("packageType", val)}
        />
        <CustomInput
          id="servingSize"
          label="Serving Size"
          value={form.servingSize}
          onChange={(e) => setField("servingSize", e.target.value)}
        />
      </div>

      <button
          className="btn btn-primary col-span-2"
          onClick={() => { onAdd(form); setForm(soda.clearForm()); }}
      >
        Add Soda
      </button>
    </div>
  );
});

export { SodaFormTemplate };
