import {type JSX, type ReactNode} from "react";
import {type IRenderForm, type IRenderItem, ProductKind} from "./Product.ts";
import {ShoeTemplate} from "./ProductTemplate/ShoeTemplate.tsx";
import {Gender} from "../../types/Gender.ts";
import {ShoeFormTemplate} from "./Forms/ShoeFormTemplate.tsx";


type ShoesForm = {
  readonly name: string;
  readonly type: ProductKind.Shoes;
  readonly price: string;
  readonly brand: string;
  readonly shoeSize: string;
  readonly shoeColor: string;
  readonly gender: Gender;
};
type ShoesPayload = ShoesForm;


class ShoesItemFactory implements IRenderItem<ShoesPayload> {
  readonly shoe: ShoesPayload

  constructor(shoe: ShoesPayload) {
    this.shoe = shoe;
  }

  buildItem(f: ShoesForm): ShoesPayload { return f; }

  renderItem(): JSX.Element {
     return <ShoeTemplate {...this.shoe} />
  }
}


class ShoesFormFactory implements IRenderForm<ShoesPayload> {
  createDefaultForm(): ShoesForm {
    return { name: "", type: ProductKind.Shoes, price: "", brand: "", shoeSize: "", shoeColor: "", gender: Gender.Female };
  }
  buildItem(f: ShoesForm): ShoesPayload { return f; }

 renderForm = (onAdd: (p: ShoesPayload) => void ): ReactNode => {
    return (
      <ShoeFormTemplate
        onAdd={onAdd}
      />
    );
  };


}

export { ShoesItemFactory, ShoesFormFactory,  type ShoesPayload, type ShoesForm}