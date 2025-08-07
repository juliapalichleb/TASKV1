import type { FC } from "react";

import {Soda, type SodaDto} from "./Soda.ts";
import {Shampoo, type ShampooDto} from "./Shampoo.ts";
import {Shoe, type ShoeDto,} from "./Shoe.ts";

type FormComponent<T> = FC<{ onAdd: (product: T) => void }>;
type TemplateComponent<T> = FC<{ details: T }>;


type ProductType = "shampoo" | "soda" | "shoe";

export type ProductDetailsMap = {
  shampoo: ShampooDto;
  soda: SodaDto;
  shoe: ShoeDto;
};


interface Product<T extends ProductType> {
  getFormComponent(): FormComponent<{type: T, details: ProductDetailsMap[T]}>;
  getTemplateComponent(): TemplateComponent<ProductDetailsMap[T]>;
}

 const ProductRegistry = {
  shampoo: Shampoo,
  soda: Soda,
  shoe: Shoe,
};


const ProductTypeDisplayNames: Record<ProductType, string> = {
  soda: "Soda",
  shampoo: "Shampoo",
  shoe: "Shoes",
};


export {
  type ProductType,
  type Product,
    ProductRegistry,
  ProductTypeDisplayNames,
  type TemplateComponent,
  type FormComponent,
};

