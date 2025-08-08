import type {SodaPackage} from "./SodaPackage.ts";
import {ProductKind} from "./Product.ts";

type SodaDto = {
  readonly name: string;
  readonly type: ProductKind.Soda;
  readonly price: string;
  readonly brand: string;
  readonly flavor: string;
  readonly packageType: SodaPackage;
  readonly servingSize: string;
}

export type {SodaDto}