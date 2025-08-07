import type {Product} from "./Product.ts";
import {Gender} from "../../types/Gender.ts";
import {ShoeForm} from "./Forms/ShoeForm.tsx";
import {ShoeTemplate} from "./ProductTemplate/ShoeTemplate.tsx";

interface ShoeDto {
  name: string;
  price: string;
  brand?: string;
  shoeSize?: string;
  shoeColor?: string;
  gender: Gender;
}

class Shoe implements Product<"shoe"> {

  getFormComponent() {
    return ShoeForm
  }

  getTemplateComponent() {
    return ShoeTemplate;
  }
}

export {Shoe, type ShoeDto}



