import type {SodaDto} from "./Soda.ts";
import type {ShampooDto} from "./Shampoo.ts";
import type {ShoeDto} from "./Shoe.ts";

// @ts-ignore
enum ProductKind {
  Soda = "soda",
  Shampoo = "shampoo",
  Shoes = "Shoes",
}

type Product = SodaDto | ShampooDto | ShoeDto

const ProductTypeDisplayNames: Record<ProductKind, string> = {
  [ProductKind.Soda]: "Soda",
  [ProductKind.Shampoo]: "Shampoo",
  [ProductKind.Shoes]: "Shoes"
};

export { type Product, ProductKind, ProductTypeDisplayNames}