import {ProductDetail} from "../../ProductList/ProductDetail.tsx";
import type {ShampooDto} from "../Shampoo.ts";

const ShampooTemplate = ({details}: {details: ShampooDto})  => {
  return (
      <>
          <span className="product-name">{details.name}</span>
          <ProductDetail value={details.brand} label={'Brand'}/>
          <ProductDetail value={details.bottleSize} label={'Bottle Size'}/>
          <ProductDetail value={details.scent} label={'Scent'}/>
          <span className="product-price">Price: {details.price}$</span>
      </>
  )
};

export {ShampooTemplate};
