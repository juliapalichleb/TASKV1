import {type JSX, type ReactNode} from "react";
import {type IRenderForm, type IRenderItem, ProductKind} from "./Product.ts";
import {SodaTemplate} from "./ProductTemplate/SodaTemplate.tsx";
import {SodaFormTemplate} from "./Forms/SodaFormTemplate.tsx";


// @ts-ignore
enum SodaPackage {
  Can = 'can',
  Bottle = 'bottle',
  Box = 'box',
}

const SodaPackageDisplayNames: Record<SodaPackage, string> = {
  [SodaPackage.Can]: "Can",
  [SodaPackage.Bottle]: "Bottle",
  [SodaPackage.Box]: "Box",
};

type SodaForm = {
  readonly name: string;
  readonly type: ProductKind.Soda;
  readonly price: string;
  readonly brand: string;
  readonly flavor: string;
  readonly packageType: SodaPackage;
  readonly servingSize: string;
};
type SodaPayload = SodaForm;


class SodaItemFactory implements IRenderItem<SodaPayload> {
  readonly soda: SodaPayload

  constructor(soda: SodaPayload) {
    this.soda = soda;
  }


  renderItem(): JSX.Element {
    return <SodaTemplate {...this.soda} />
  }
}

class SodaFormFactory implements IRenderForm<SodaPayload> {
  createDefaultForm(): SodaForm {
    return { name: "", type: ProductKind.Soda, price: "", brand: "", flavor: "", packageType: SodaPackage.Box, servingSize: "" };
  }
  buildItem(f: SodaForm): SodaPayload { return f; }

 renderForm = (onAdd: (p: SodaPayload) => void ): ReactNode => {
    return (
      <SodaFormTemplate
        onAdd={onAdd}
      />
    );
  };


}


export { SodaFormFactory,SodaItemFactory, type SodaPayload, type SodaForm, SodaPackageDisplayNames, SodaPackage}