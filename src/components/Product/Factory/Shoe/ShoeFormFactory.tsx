import {type IRenderForm} from "../ProductFactory.ts";
import type {ShoeDto} from "../../../../types/Shoe.ts";
import {Gender} from "../../../../types/Gender.ts";
import type {ReactNode} from "react";
import {ShoeFormTemplate} from "../../Forms/ShoeFormTemplate.tsx";
import {ProductKind} from "../../../../types/Product.ts";

class ShoeFormFactory implements IRenderForm<ShoeDto> {
  clearForm(): ShoeDto {
    return { name: "", type: ProductKind.Shoes, price: "", brand: "", shoeSize: "", shoeColor: "", gender: Gender.Female };
  }

 createRenderForm = (onAdd: (p: ShoeDto) => void ): ReactNode => {
    return (
      <ShoeFormTemplate
        onAdd={onAdd}
      />
    );
  };


}

export { ShoeFormFactory }