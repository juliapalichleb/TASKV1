import "./App.css";
import { ProductFactory
} from "./components/Product/Factory/ProductFactory.ts";
import {ProductForm} from "./components/Product/ProductForm.tsx";
import {useProducts} from "./hooks/useProducts.ts";

function App() {
  const { products, createProduct } = useProducts()

  return (
    <div className="flex gap-20 justify-center align-center">
      <ProductForm onAdd={createProduct}/>

      <div className="flex flex-col gap-y-2" >
        {products.map((product, index) => {
          const {createItem} = new ProductFactory();
          const productItem = createItem(product)

          return (
            <div key={index}>
              {productItem.createRenderInfo()}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;