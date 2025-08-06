import { Gender } from "../../types/Gender.ts";
import type { FC } from "react";
import { SodaForm } from "./Forms/SodaForm.tsx";
import { SodaTemplate } from "./ProductTemplate/SodaTemplate.tsx";
import { ShampooForm } from "./Forms/ShampooForm.tsx";
import { ShampooTemplate } from "./ProductTemplate/ShampooTemplate.tsx";
import { ShoeForm } from "./Forms/ShoeForm.tsx";
import { ShoeTemplate } from "./ProductTemplate/ShoeTemplate.tsx";
import { type SodaDto, SodaPackage } from "../../types/Soda.ts";
import type { ShampooDto } from "../../types/Shampoo.ts";
import type { ShoeDto } from "../../types/Shoe.ts";

// @ts-ignore
enum ProductType {
  Shoe = "shoe",
  Shampoo = "shampoo",
  Soda = "soda",
}

type ProductDetailsMap = {
  [ProductType.Soda]: SodaDto;
  [ProductType.Shampoo]: ShampooDto;
  [ProductType.Shoe]: ShoeDto;
};

type Product =
  | { type: ProductType.Shoe; details: ShoeDto }
  | { type: ProductType.Shampoo; details: ShampooDto }
  | { type: ProductType.Soda; details: SodaDto };

const ProductTypeDisplayNames: Record<ProductType, string> = {
  [ProductType.Soda]: "Soda",
  [ProductType.Shampoo]: "Shampoo",
  [ProductType.Shoe]: "Shoes",
};

type FormComponent = FC<{ onAdd: (product: Product) => void }>;
type TemplateComponent<T> = FC<{ details: T }>;


type FormFactoryEntry<T> = {
  defaultDetails: T;
  formValidationSchema?: unknown;
  FormComponent: FormComponent;
  TemplateComponent: TemplateComponent<T>;
};

const productFactory: {
  [K in ProductType]: FormFactoryEntry<ProductDetailsMap[K]>;
} = {
  [ProductType.Soda]: {
    defaultDetails: {
      name: "",
      price: "",
      packageType: SodaPackage.Can,
    },
    formValidationSchema: {},
    FormComponent: SodaForm,
    TemplateComponent: SodaTemplate,
  },
  [ProductType.Shampoo]: {
    defaultDetails: {
      name: "",
      price: "",
    },
    formValidationSchema: {},
    FormComponent: ShampooForm,
    TemplateComponent: ShampooTemplate,
  },
  [ProductType.Shoe]: {
    defaultDetails: {
      name: "",
      price: "",
      gender: Gender.Male,
    },
    formValidationSchema: {},
    FormComponent: ShoeForm,
    TemplateComponent: ShoeTemplate,
  },
};

export {
  ProductType,
  type Product,
  ProductTypeDisplayNames,
  productFactory,
  type FormFactoryEntry,
  type TemplateComponent,
  type FormComponent,
};
