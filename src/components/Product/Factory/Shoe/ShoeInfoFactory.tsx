import type {IRenderItem} from "../ProductFactory.ts";
import type {ShoeDto} from "../../../../types/Shoe.ts";
import {ShoeTemplate} from "../../ProductTemplate/ShoeTemplate.tsx";
import type {JSX} from "react";

class ShoeInfoFactory implements IRenderItem<ShoeDto> {
  readonly shoe: ShoeDto

  constructor(shoe: ShoeDto) {
    this.shoe = shoe;
  }

  createRenderInfo(): JSX.Element {
     return <ShoeTemplate {...this.shoe} />
  }
}

export { ShoeInfoFactory }