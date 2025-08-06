import {CustomInput} from "../../controls/CustomInput.tsx";
import type {ShampooDto} from "../../../types/Product.ts";


type ShampooFormDto = {
  data: ShampooDto;
  onChange: <K extends keyof ShampooDto>(field: K, value: ShampooDto[K]) => void;
};

const ShampooForm = ({ data, onChange }: ShampooFormDto) => {

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
                  id="scent"
                  label="Scent"
                  value={data.scent}
                  onChange={(e) => onChange("scent", e.target.value)}
              />
          </div>

          <div className="flex gap-x-2">
              <CustomInput
                  id="bottleSize"
                  label="Bottle Size"
                  required
                  value={data.bottleSize}
                  onChange={(e) => onChange("bottleSize", e.target.value)}
              />
          </div>
      </div>
  );
};

export { ShampooForm };
