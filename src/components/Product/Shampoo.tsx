import {type JSX, type ReactNode} from "react";
import {type IRenderForm, type IRenderItem, ProductKind} from "./Product.ts";
import {ShampooTemplate} from "./ProductTemplate/ShampooTemplate.tsx";
import {ShampooFormTemplate} from "./Forms/ShampooFormTemplate.tsx";

type ShampooForm = {
  readonly name: string;
  readonly type: ProductKind.Shampoo;
  readonly price: string;
  readonly brand: string;
  readonly scent: string;
  readonly bottleSize: string;
};
type ShampooPayload = ShampooForm;


class ShampooItemFactory implements IRenderItem<ShampooPayload> {
  readonly shampoo: ShampooPayload

  constructor(shampoo: ShampooPayload) {
    this.shampoo = shampoo;
  }


  renderItem(): JSX.Element {
      return <ShampooTemplate {...this.shampoo} />
  }
}

class ShampooFormFactory implements IRenderForm<ShampooForm> {

 createDefaultForm(): ShampooForm {
    return { name: "", type: ProductKind.Shampoo, price: "", brand: "", scent: "",  bottleSize: "" };
  }

  buildItem(f: ShampooForm): ShampooPayload { return f; }

  renderForm = (onAdd: (p: ShampooPayload) => void ): ReactNode => {
    return (
      <ShampooFormTemplate
        onAdd={onAdd}
      />
    );
  };

}
export { ShampooFormFactory,ShampooItemFactory, type ShampooPayload, type ShampooForm}