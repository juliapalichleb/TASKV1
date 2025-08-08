import type {IRenderItem} from "../ProductFactory.ts";
import type {ShampooDto} from "../../../../types/Shampoo.ts";
import type {JSX} from "react";
import {ShampooTemplate} from "../../ProductTemplate/ShampooTemplate.tsx";

class ShampooInfoFactory implements IRenderItem<ShampooDto> {
  readonly shampoo: ShampooDto

  constructor(shampoo: ShampooDto) {
    this.shampoo = shampoo;
  }

  createRenderInfo(): JSX.Element {
      return <ShampooTemplate {...this.shampoo} />
  }
}


export { ShampooInfoFactory }