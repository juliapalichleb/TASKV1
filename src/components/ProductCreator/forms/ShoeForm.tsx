import { CustomInput } from "../../controls/CustomInput";
import { CustomSelect } from "../../controls/CustomSelect";
import {
    GenderType,
    GenderTypeDisplayNames,
    type ShoesDto,
} from "../../../types/Product";

type ShoeFormDto = {
  data: ShoesDto;
  onChange: <K extends keyof ShoesDto>(field: K, value: ShoesDto[K]) => void;
};

const ShoeForm = ({ data, onChange }: ShoeFormDto) => {
  const genderOptions = Object.values(GenderType).map((type) => ({
    value: type,
    displayName: GenderTypeDisplayNames[type],
  }));

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-4">
      <div className="flex gap-x-2">
        <CustomInput
          id="brand"
          label="Brand"
          value={data.brand || ""}
          onChange={(e) => onChange("brand", e.target.value)}
        />
        <CustomInput
          id="shoeSize"
          label="Shoe Size"
          value={data.shoeSize || ""}
          onChange={(e) => onChange("shoeSize", e.target.value)}
        />
      </div>

      <div className="flex gap-x-2">
        <CustomInput
          id="shoeColor"
          label="Shoe Color"
          value={data.shoeColor || ""}
          onChange={(e) => onChange("shoeColor", e.target.value)}
        />
        <CustomSelect
          id="gender"
          label="Gender"
          value={data.gender}
          options={genderOptions}
          onChange={(e) => onChange("gender", e)}
        />
      </div>
    </div>
  );
};

export { ShoeForm };
