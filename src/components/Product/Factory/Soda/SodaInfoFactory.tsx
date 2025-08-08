import type {IRenderItem} from "../ProductFactory.ts";
import type {SodaDto} from "../../../../types/Soda.ts";
import {SodaTemplate} from "../../ProductTemplate/SodaTemplate.tsx";
import type {JSX} from "react";

class SodaInfoFactory implements IRenderItem<SodaDto> {
  readonly soda: SodaDto

  constructor(soda: SodaDto) {
    this.soda = soda;
  }

  createRenderInfo(): JSX.Element {
    return <SodaTemplate {...this.soda} />
  }
}


export {SodaInfoFactory}