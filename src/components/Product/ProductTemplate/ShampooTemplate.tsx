import {ProductDetail} from "../ProductDetail.tsx";
import type {ShampooDto} from "../../../types/Shampoo.ts";

const ShampooTemplate = (item: ShampooDto)  => {
  return (
      <div className="product-card">
          <span className="product-name">{item.name}</span>
          <ProductDetail value={item.brand} label={'Brand'}/>
          <ProductDetail value={item.bottleSize} label={'Bottle Size'}/>
          <ProductDetail value={item.scent} label={'Scent'}/>
          <span className="product-price">Price: {item.price}$</span>
      </div>
  )
};

export {ShampooTemplate};
