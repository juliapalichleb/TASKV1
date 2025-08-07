import type {Product} from "./Product.ts";

import {ShampooForm} from "./Forms/ShampooForm.tsx";
import {ShampooTemplate} from "./ProductTemplate/ShampooTemplate.tsx";

export interface ShampooDto {
  name: string;
  price: string;
  brand?: string;
  scent?: string;
  bottleSize?: string;
}

export class Shampoo implements Product<"shampoo"> {

  getFormComponent() {
    return ShampooForm;
  }

  getTemplateComponent() {
    return ShampooTemplate;
  }
}




