import type  {SodaDto} from "../../../types/Product.ts";
import {ProductDetail} from "../ProductDetail.tsx";

const SodaTemplate = ({details}: {details: SodaDto})  => {
  return (
      <>
        <ProductDetail value={details.brand} label={'Brand'}/>
        <ProductDetail value={details.packageType} label={'Package Type'}/>
        <ProductDetail value={details.flavor} label={'Flavor'}/>
        <ProductDetail value={details.servingSize} label={'Serving Size'}/>
      </>
  )
};

export { SodaTemplate };
