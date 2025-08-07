import { useState } from "react";
import { CustomInput } from "../../controls/CustomInput.tsx";
import { CustomSelect } from "../../controls/CustomSelect.tsx";
import {ProductType} from "../Product.ts";
import {type SodaDto, SodaPackage, SodaPackageDisplayNames} from "../Soda.ts";



const SodaForm = ({onAdd}: {onAdd: (product: { type: ProductType.Soda, details: SodaDto }) => void }) => {
  const [soda, setSoda] = useState<SodaDto>({
    name: "",
    price: "",
    brand: "",
    flavor: "",
    packageType: SodaPackage.Can,
    servingSize: "",
  });

  const sodaOptions = Object.values(SodaPackage).map((type) => ({
    value: type,
    displayName: SodaPackageDisplayNames[type],
  }));

  const handleChange = <K extends keyof SodaDto>(field: K, value: SodaDto[K]) => {
    setSoda((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Soda submitted:", soda);
    onAdd({type: ProductType.Soda, details: soda})
  };

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-4">
      <div className="flex gap-x-2">
        <CustomInput
          id="name"
          label="Name"
          value={soda.name}
          required
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <CustomInput
          id="price"
          label="Price"
          value={soda.price}
          required
          onChange={(e) => handleChange("price", e.target.value)}
        />
      </div>

      <div className="flex gap-x-2">
        <CustomInput
          id="brand"
          label="Brand"
          value={soda.brand}
          onChange={(e) => handleChange("brand", e.target.value)}
        />
        <CustomInput
          id="flavor"
          label="Flavor"
          value={soda.flavor}
          onChange={(e) => handleChange("flavor", e.target.value)}
        />
      </div>

      <div className="flex gap-x-2">
        <CustomSelect
          id="packageType"
          label="Package Type"
          value={soda.packageType}
          options={sodaOptions}
          onChange={(val) => handleChange("packageType", val)}
        />
        <CustomInput
          id="servingSize"
          label="Serving Size"
          value={soda.servingSize}
          onChange={(e) => handleChange("servingSize", e.target.value)}
        />
      </div>

      <button className="btn btn-primary col-span-2" onClick={handleSubmit}>
        Add Soda
      </button>
    </div>
  );
};

export { SodaForm };
