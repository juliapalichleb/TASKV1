import {ProductDetail} from "../ProductDetail.tsx";
import type {ShoeDto} from "../../../types/Shoe.ts";


const ShoeTemplate = (item: ShoeDto)  => {
  return (
      <div className="product-card">
          <span className="product-name">{item.name}</span>
          <ProductDetail value={item.shoeSize} label={'Shoe Size'}/>
          <ProductDetail value={item.shoeColor} label={'Shoe Color'}/>
          <ProductDetail value={item.brand} label={'Brand'}/>
          <ProductDetail value={item.gender} label={'Gender'}/>
          <span className="product-price">Price: {item.price}$</span>
      </div>
  )
};

export {ShoeTemplate};
