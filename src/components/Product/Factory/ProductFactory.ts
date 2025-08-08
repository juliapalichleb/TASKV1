import type {ReactNode} from "react";
import {SodaInfoFactory} from "./Soda/SodaInfoFactory.tsx";
import {ProductKind} from "../../../types/Product.ts";
import {ShampooInfoFactory} from "./Shampoo/ShampooInfoFactory.tsx";
import {ShoeInfoFactory} from "./Shoe/ShoeInfoFactory.tsx";
import {SodaFormFactory} from "./Soda/SodaFormFactory.tsx";
import {ShoeFormFactory} from "./Shoe/ShoeFormFactory.tsx";
import type {SodaDto} from "../../../types/Soda.ts";
import type {ShampooDto} from "../../../types/Shampoo.ts";
import type {ShoeDto} from "../../../types/Shoe.ts";
import {ShampooFormFactory} from "./Shampoo/ShampooFormFactory.tsx";

interface IRenderItem<T> {
  createRenderInfo: (item:T) => ReactNode;
}

interface IRenderForm<T> {
  createRenderForm(onAdd: (p: T) => void): ReactNode;
  clearForm(): T;
}

type Product = SodaDto | ShampooDto | ShoeDto

class ProductFactory {
  createItem(product: Product) {
    switch (product.type) {
        case ProductKind.Soda:
            return new SodaInfoFactory(product);
        case ProductKind.Shampoo:
            return new ShampooInfoFactory(product);
        case ProductKind.Shoes:
            return new ShoeInfoFactory(product);

      default:
        throw new Error(`Unknown product type.`);
    }
  }

   createForm(type: ProductKind) {
    switch (type) {
        case ProductKind.Soda:
            return new SodaFormFactory();
        case ProductKind.Shampoo:
            return new ShampooFormFactory();
        case ProductKind.Shoes:
            return new ShoeFormFactory();

      default:
        throw new Error(`Unknown product type.`);
    }
  }
}





export { ProductFactory, type IRenderItem, type IRenderForm }