
export interface SodaDto {
  name: string;
  price: number;
  brand?: string;
  flavor?: string;
  packageType: 'can' | 'plasticBottle' | 'glassBottle';
  servingSize?: number;
}

export interface ShampooDto {
  name: string;
  price: number;
  brand?: string;
  scent?: string;
  bottleSize?: number;
}

export interface ShoesDto {
  name: string;
  price: number;
  brand?: string;
  shoeSize?: string;
  shoeColor?: string;
  gender: GenderType;
}


export type Product =
  | { type: 'shoe'; data: ShoesDto }
  | { type: 'shampoo'; data: ShampooDto }
  | { type: 'soda'; data: SodaDto };


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

