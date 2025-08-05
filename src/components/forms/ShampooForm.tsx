import {CustomInput} from "../controls/CustomInput.tsx";
import type {ShampooDto} from "../../types/Product.ts";


type ShampooFormDto = {
  data: ShampooDto;
  onChange: (field: string, value: string) => void;
};

const ShampooForm = ({ data, onChange }: ShampooFormDto) => {

  return (
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
          <div className="flex gap-x-2">
              <CustomInput
                  id="name"
                  label="Name"
                  value={data.name}
                  required
                  onChange={(e) => onChange("name", e.target.value)}
              />
              <CustomInput
                  id="price"
                  label="Price"
                  value={data.price}
                  required
                  onChange={(e) => onChange("price", e.target.value)}
              />
          </div>

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
