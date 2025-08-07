import {ProductDetail} from "../../ProductList/ProductDetail.tsx";
import type {ShoeDto} from "../Shoe.ts";

const ShoeTemplate = ({details}: {details: ShoeDto})  => {
  return (
      <>
          <span className="product-name">{details.name}</span>
          <ProductDetail value={details.shoeSize} label={'Shoe Size'}/>
          <ProductDetail value={details.shoeColor} label={'Shoe Color'}/>
          <ProductDetail value={details.brand} label={'Brand'}/>
          <ProductDetail value={details.gender} label={'Gender'}/>
          <span className="product-price">Price: {details.price}$</span>
      </>
  )
};

export {ShoeTemplate};
