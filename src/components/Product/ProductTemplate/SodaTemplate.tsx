import type  {SodaDto} from "../Product.ts";
import {ProductDetail} from "../../ProductList/ProductDetail.tsx";

const SodaTemplate = ({details}: {details: SodaDto})  => {
  return (
      <>
        <span className="product-name">{details.name}</span>
        <ProductDetail value={details.brand} label={'Brand'}/>
        <ProductDetail value={details.packageType} label={'Package Type'}/>
        <ProductDetail value={details.flavor} label={'Flavor'}/>
        <ProductDetail value={details.servingSize} label={'Serving Size'}/>
        <span className="product-price">Price: {details.price}$</span>
      </>
  )
};

export {SodaTemplate};
