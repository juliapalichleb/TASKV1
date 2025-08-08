import {SodaFormFactory, SodaItemFactory, type SodaPayload} from "./Soda.tsx";
import {ShampooFormFactory, ShampooItemFactory, type ShampooPayload} from "./Shampoo.tsx";
import {ShoesFormFactory, ShoesItemFactory, type ShoesPayload} from "./Shoe.tsx";
import type {ReactNode} from "react";



// @ts-ignore
 enum ProductKind {
  Soda = "soda",
  Shampoo = "shampoo",
  Shoes = "Shoes",
}



const ProductTypeDisplayNames: Record<ProductKind, string> = {
  [ProductKind.Soda]: "Soda",
  [ProductKind.Shampoo]: "Shampoo",
  [ProductKind.Shoes]: "Shoes"
};


interface IRenderItem<T> {
  renderItem: (item:T) => ReactNode;
}

interface IRenderForm<T> {
  renderForm(onAdd: (p: T) => void): ReactNode;
}

type Product = SodaPayload |ShampooPayload | ShoesPayload


class ProductFactory {
  createItem(product: Product) {
    switch (product.type) {
        case ProductKind.Soda:
            return new SodaItemFactory(product);
        case ProductKind.Shampoo:
            return new ShampooItemFactory(product);
        case ProductKind.Shoes:
            return new ShoesItemFactory(product);

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
            return new ShoesFormFactory();

      default:
        throw new Error(`Unknown product type.`);
    }
  }
}





export { ProductKind, ProductTypeDisplayNames,ProductFactory, type Product, type IRenderItem, type IRenderForm }