import {ProductDetail} from "../../ProductList/ProductDetail.tsx";
import { type ShampooPayload} from "../Shampoo.tsx";

const ShampooTemplate = (item: ShampooPayload)  => {
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
