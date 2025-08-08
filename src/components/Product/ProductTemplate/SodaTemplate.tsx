import {ProductDetail} from "../../ProductList/ProductDetail.tsx";

import type { SodaPayload} from "../Soda.tsx";


const SodaTemplate = ({name, brand, packageType, flavor, servingSize, price}: SodaPayload)  => {
  return (
      <div className="product-card">
        <span className="product-name">{name}</span>
        <ProductDetail value={brand} label={'Brand'}/>
        <ProductDetail value={packageType} label={'Package Type'}/>
        <ProductDetail value={flavor} label={'Flavor'}/>
        <ProductDetail value={servingSize} label={'Serving Size'}/>
        <span className="product-price">Price: {price}$</span>
      </div>
  )
};

export {SodaTemplate};
