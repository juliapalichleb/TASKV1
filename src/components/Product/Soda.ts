import {SodaTemplate} from "./ProductTemplate/SodaTemplate.tsx";
import {SodaForm} from "./Forms/SodaForm.tsx";
import {type Product, ProductType} from "./Product.ts";

interface SodaDto {
  name: string;
  price: string;
  brand?: string;
  flavor?: string;
  packageType: SodaPackage;
  servingSize?: string;
}

// @ts-ignore
enum SodaPackage {
    Can = 'can',
    Bottle = 'bottle',
    Box = 'box',
}
const SodaPackageDisplayNames: Record<SodaPackage, string> = {
  [SodaPackage.Can]: "Can",
  [SodaPackage.Bottle]: "Bottle",
  [SodaPackage.Box]: "Box",
};


class Soda implements Product<SodaDto, ProductType.Soda> {
  constructor() {}

  getFormComponent() {
    return SodaForm
  }

  getTemplateComponent() {
    return SodaTemplate;
  }
}



export {Soda, type SodaDto, SodaPackage, SodaPackageDisplayNames }
