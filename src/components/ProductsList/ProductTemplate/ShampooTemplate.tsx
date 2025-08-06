import type {ShampooDto} from "../../../types/Product.ts";
import {ProductDetail} from "../ProductDetail.tsx";

const ShampooTemplate = ({details}: {details: ShampooDto})  => {
  return (
      <>
        <ProductDetail value={details.brand} label={'Brand'}/>
        <ProductDetail value={details.bottleSize} label={'Bottle Size'}/>
        <ProductDetail value={details.scent} label={'Scent'}/>
      </>
  )
};

export { ShampooTemplate };
