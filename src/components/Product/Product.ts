import type { FC } from "react";

import {Soda, type SodaDto} from "./Soda.ts";
import {Shampoo, type ShampooDto} from "./Shampoo.ts";
import {Shoe, type ShoeDto} from "./Shoe.ts";

type FormComponent<T> = FC<{ onAdd: (product: T) => void }>;
type TemplateComponent<T> = FC<{ details: T }>;

interface Product<T, K> {
  getFormComponent(): FormComponent<{type: K, details: T}>;
  getTemplateComponent(): TemplateComponent<T>;
}

export type Products =
  | { type: ProductType.Shoe; details: ShoeDto }
  | { type: ProductType.Shampoo; details: ShampooDto }
  | { type: ProductType.Soda; details: SodaDto };

// @ts-ignore
enum ProductType {
  Shoe = "shoe",
  Shampoo = "shampoo",
  Soda = "soda",
}



const ProductTypeDisplayNames: Record<ProductType, string> = {
  [ProductType.Soda]: "Soda",
  [ProductType.Shampoo]: "Shampoo",
  [ProductType.Shoe]: "Shoes",
};

export class ProductFactory {
  static createProduct(type: ProductType){
    switch (type) {
      case ProductType.Soda:
        return new Soda();
      case ProductType.Shampoo:
        return new Shampoo()
      case ProductType.Shoe:
        return new Shoe()
      default:
        throw new Error(`Unknown product type: ${type}`);
    }
  }
}




export {
  ProductType,
  type Product,
  ProductTypeDisplayNames,
  type TemplateComponent,
  type FormComponent,
};

