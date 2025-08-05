import { useState } from 'react';

const CustomSelect2 = ({ allProducts }: { allProducts: string[] }) => {
  const [productType, setProductType] = useState<string | undefined>();

  return (
      <div
          className={"flex flex-col product-container"}
          style={{gap: "1rem"}}
      >
        {allProducts.map((product) => {
          return (
              <div className="product-card">
                <span className="product-name">{product.name}</span>
                {product.flavor && (
                    <>
                      - <span>{product.flavor}</span>
                    </>
                )}
                {product.scent && (
                    <>
                      - <span>{product.scent}</span>
                    </>
                )}
                <p className="product-brand">Brand: {product.brand}</p>
                {product.packageType && product.servingSize && (
                    <div className="product-brand">
                      Size: {product.packageType}, {product.servingSize}
                    </div>
                )}
                {product.bottleSize && (
                    <div className="product-info">Size: {product.bottleSize}</div>
                )}
                {product.shoeSize && (
                    <div className="product-info">
                      Size: {product.shoeSize} ( European )
                    </div>
                )}
                {product.shoeColor && (
                    <div className="product-info">Color: {product.shoeColor}</div>
                )}
                {product.gender && (
                    <div className="product-info">Gender: {product.gender}</div>
                )}
                Price: <span className="product-price">{product.price}$</span>
              </div>
          );
        })}
      </div>
  );
};

export {CustomSelect};
