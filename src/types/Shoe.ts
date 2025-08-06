import {Gender} from "./Gender.ts";

interface ShoeDto {
  name: string;
  price: string;
  brand?: string;
  shoeSize?: string;
  shoeColor?: string;
  gender: Gender;
}


export {type ShoeDto }