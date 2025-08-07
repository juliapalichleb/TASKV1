
import {type Product, ProductType} from "./Product.ts";

import {ShampooForm} from "./Forms/ShampooForm.tsx";
import {ShampooTemplate} from "./ProductTemplate/ShampooTemplate.tsx";

export interface ShampooDto {
  name: string;
  price: string;
  brand?: string;
  scent?: string;
  bottleSize?: string;
}

export class Shampoo implements Product<ShampooDto, ProductType.Shampoo> {
  constructor() {}

  getFormComponent() {
    return ShampooForm;
  }

  getTemplateComponent() {
    return ShampooTemplate;
  }
}




