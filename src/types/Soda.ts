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

export {type SodaDto, SodaPackage, SodaPackageDisplayNames }