import type {Gender} from "./Gender.ts";
import {ProductKind} from "./Product.ts";

type ShoeDto = {
  readonly name: string;
  readonly type: ProductKind.Shoes;
  readonly price: string;
  readonly brand: string;
  readonly shoeSize: string;
  readonly shoeColor: string;
  readonly gender: Gender;
};


export type {ShoeDto}