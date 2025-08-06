
export interface SodaDto {
  brand?: string;
  flavor?: string;
  packageType: SodaType;
  servingSize?: string;
}

export interface ShampooDto {
  brand?: string;
  scent?: string;
  bottleSize?: string;
}

export interface ShoesDto {
  brand?: string;
  shoeSize?: string;
  shoeColor?: string;
  gender: GenderType;
}


export type Product =
  | { type: ProductType.Shoe; name: string; price: string; details: ShoesDto }
  | { type: ProductType.Shampoo; name: string; price: string; details: ShampooDto }
  | { type: ProductType.Soda; name: string; price: string; details: SodaDto };



export enum ProductType {
    Shoe = 'shoe',
    Shampoo = 'shampoo',
    Soda = 'soda',
}
export const ProductTypeDisplayNames: Record<ProductType, string> = {
  [ProductType.Soda]: "Soda",
  [ProductType.Shampoo]: "Shampoo",
  [ProductType.Shoe]: "Shoes",
};

export enum GenderType {
    Male = 'male',
    Female = 'female',
    Unisex = 'unisex',
}

export const GenderTypeDisplayNames: Record<GenderType, string> = {
  [GenderType.Male]: "Male",
  [GenderType.Female]: "Female",
  [GenderType.Unisex]: "Unisex",
};


export enum SodaType {
    Can = 'can',
    Bottle = 'bottle',
    Box = 'box',
}
export const SodaTypeDisplayNames: Record<SodaType, string> = {
  [SodaType.Can]: "Can",
  [SodaType.Bottle]: "Bottle",
  [SodaType.Box]: "Box",
};

