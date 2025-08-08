import type {ShampooDto} from "../../../../types/Shampoo.ts";
import {ShampooFormTemplate} from "../../Forms/ShampooFormTemplate.tsx";
import type {ReactNode} from "react";
import {type IRenderForm} from "../ProductFactory.ts";
import {ProductKind} from "../../../../types/Product.ts";

class ShampooFormFactory implements IRenderForm<ShampooDto> {

 clearForm(): ShampooDto {
    return { name: "", type: ProductKind.Shampoo, price: "", brand: "", scent: "",  bottleSize: "" };
  }

  createRenderForm = (onAdd: (p: ShampooDto) => void ): ReactNode => {
    return (
      <ShampooFormTemplate
        onAdd={onAdd}
      />
    );
  };

}


export { ShampooFormFactory }