import {ProductKind} from "./Product.ts";


type ShampooDto = {
  readonly name: string;
  readonly type: ProductKind.Shampoo;
  readonly price: string;
  readonly brand: string;
  readonly scent: string;
  readonly bottleSize: string;
}

export type {ShampooDto}