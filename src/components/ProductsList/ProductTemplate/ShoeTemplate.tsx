import type {ShoesDto} from "../../../types/Product.ts";
import {ProductDetail} from "../ProductDetail.tsx";

const ShoeTemplate = ({details}: {details: ShoesDto})  => {
  return (
      <>
        <ProductDetail value={details.shoeSize} label={'Shoe Size'}/>
        <ProductDetail value={details.shoeColor} label={'Shoe Color'}/>
        <ProductDetail value={details.brand} label={'Brand'}/>
        <ProductDetail value={details.gender} label={'Gender'}/>
      </>
  )
};

export { ShoeTemplate };
