import {SodaFormTemplate} from "../../Forms/SodaFormTemplate.tsx";
import type {SodaDto} from "../../../../types/Soda.ts";
import type {ReactNode} from "react";
import {SodaPackage} from "../../../../types/SodaPackage.ts";
import {type IRenderForm} from "../ProductFactory.ts";
import {ProductKind} from "../../../../types/Product.ts";

class SodaFormFactory implements IRenderForm<SodaDto> {
  clearForm(): SodaDto {
    return { name: "", type: ProductKind.Soda, price: "", brand: "", flavor: "", packageType: SodaPackage.Box, servingSize: "" };
  }

 createRenderForm = (onAdd: (p: SodaDto) => void ): ReactNode => {
    return (
      <SodaFormTemplate
        onAdd={onAdd}
      />
    );
  };
}


export { SodaFormFactory }