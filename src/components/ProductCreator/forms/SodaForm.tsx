import {CustomInput} from "../../controls/CustomInput.tsx";
import {CustomSelect} from "../../controls/CustomSelect.tsx";
import { type SodaDto, SodaType, SodaTypeDisplayNames} from "../../../types/Product.ts";


type SodaFormDto = {
  data: SodaDto;
  onChange: <K extends keyof SodaDto>(field: K, value: SodaDto[K]) => void;
};

const SodaForm = ({ data, onChange }: SodaFormDto) => {
  const sodaOptions= Object.values(SodaType).map((type) => ({
    value: type,
    displayName: SodaTypeDisplayNames[type],
  }));


  return (
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">

          <div className="flex gap-x-2">
              <CustomInput
                  id="brand"
                  label="Brand"
                  value={data.brand}
                  onChange={(e) => onChange("brand", e.target.value)}
              />
              <CustomInput
                  id="flavor"
                  label="Flavor"
                  value={data.flavor}
                  onChange={(e) => onChange("flavor", e.target.value)}
              />
          </div>

          <div className="flex gap-x-2">
              <CustomSelect
                  id="packageType"
                  label="Package type"
                  value={data.packageType}
                  options={sodaOptions}
                  onChange={(e) => onChange("packageType", e)}
              />
              <CustomInput
                  id="servingSize"
                  label="Serving Size"
                  value={data.servingSize}
                  onChange={(e) => onChange("servingSize", e.target.value)}
              />
          </div>
      </div>
  );
};

export {SodaForm};
