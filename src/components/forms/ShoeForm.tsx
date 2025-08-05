import {CustomInput} from "../controls/CustomInput.tsx";
import {CustomSelect} from "../controls/CustomSelect.tsx";
import {GenderType, GenderTypeDisplayNames, type ShoesDto} from "../../types/Product.ts";
import {useState} from "react";


type ShoeFormDto = {
  data: ShoesDto;
  onChange: (field: string, value: string) => void;
};

const ShoeForm = ({ data, onChange }: ShoeFormDto) => {
  const genderOptions= Object.values(GenderType).map((type) => ({
    value: type,
    displayName: GenderTypeDisplayNames[type],
  }));

  const [shoesData, setShoesData] = useState<ShoesDto>({
    name: '',
    price: 0,
    brand: '',
    shoeSize: '',
    shoeColor: '',
    gender: GenderType.Male,
  });

const handleChange = (field: keyof ShoesDto, value: string | number) => {
  setShoesData((prev) => ({
    ...prev,
    [field]: value,
  }));
};


  return (
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
          <div className="flex gap-x-2">
              <CustomInput
                  id="name"
                  label="Name"
                  value={shoesData.name}
                  required
                  onChange={(e) => handleChange("name", e.target.value)}
              />
              <CustomInput
                  id="price"
                  label="Price"
                  value={shoesData.price}
                  required
                  onChange={(e) => handleChange("price", e.target.value)}
              />
          </div>

          <div className="flex gap-x-2">
              <CustomInput
                  id="brand"
                  label="Brand"
                  value={shoesData.brand}
                  onChange={(e) => handleChange("brand", e.target.value)}
              />
              <CustomInput
                  id="shoeSize"
                  label="Shoe Size"
                  value={shoesData.shoeSize}
                  onChange={(e) => handleChange("shoeSize", e.target.value)}
              />
          </div>

          <div className="flex gap-x-2">
              <CustomInput
                  id="shoeColor"
                  label="Shoe Color"
                  value={shoesData.shoeColor}
                  onChange={(e) => handleChange("shoeColor", e.target.value)}
              />
              <CustomSelect
                  id="gender"
                  label="Gender"
                  value={shoesData.gender}
                  options={genderOptions}
                  onChange={(e) => handleChange("gender", e.target.value)}
              />
          </div>
      </div>
  );
};

export { ShoeForm };
