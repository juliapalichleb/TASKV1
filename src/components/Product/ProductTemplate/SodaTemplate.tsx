import {ProductDetail} from "../ProductDetail.tsx";
import type {SodaDto} from "../../../types/Soda.ts";


const SodaTemplate = (item: SodaDto)  => {
  return (
      <div className="product-card">
        <span className="product-name">{item.name}</span>
        <ProductDetail value={item.brand} label={'Brand'}/>
        <ProductDetail value={item.packageType} label={'Package Type'}/>
        <ProductDetail value={item.flavor} label={'Flavor'}/>
        <ProductDetail value={item.servingSize} label={'Serving Size'}/>
        <span className="product-price">Price: {item.price}$</span>
      </div>
  )
};

export {SodaTemplate};
