// import React, { useState, type JSX } from "react";
// import "./App.css";
//
// /**
//  * - enum ProductKind
//  * - Klasy pluginów z: FormView (lokalny state + Add), renderItem(item) (metoda, nie komponent)
//  * - Rodzic: lista + selektor produktu
//  * - ZERO: any / unknown / never / if / switch / useEffect / localStorage
//  */
//
// export enum ProductKind {
//   Soda = "soda",
//   Shampoo = "shampoo",
//   Shoes = "shoes",
// }
//
// type BaseItem<PID extends ProductKind, Payload> = {
//   readonly id: string;
//   readonly productId: PID;
//   readonly payload: Payload;
// };
//
// let __uid = 0;
// const uid = (): string => {
//   __uid += 1;
//   return ${Date.now().toString(36)}_${__uid.toString(36)};
// };
//
// /* ========== Abstrakcyjny plugin ========== */
//
// abstract class ProductPlugin<
//   PID extends ProductKind,
//   FormShape,
//   Payload
// > {
//   abstract readonly id: PID;
//   abstract readonly label: string;
//
//   abstract createDefaultForm(): FormShape;
//   abstract buildItem(form: FormShape): Payload;
//
//   /** Formularz (ma własny state + przycisk Add) */
//   abstract FormView(props: { readonly onAdd: (payload: Payload) => void }): JSX.Element;
//
//   /** Render pojedynczej karty na liście (metoda, nie komponent) */
//   abstract renderItem(item: BaseItem<PID, Payload>): JSX.Element;
// }
//
// /* ========== SODA ========== */
//
// type SodaForm = {
//   readonly name: string;
//   readonly price: string;
//   readonly brand: string;
//   readonly flavor: string;
//   readonly packageType: "Can" | "Plastic Bottle" | "Glass Bottle";
//   readonly servingSize: string;
// };
// type SodaPayload = SodaForm;
// type SodaItem = BaseItem<ProductKind.Soda, SodaPayload>;
//
// class Soda extends ProductPlugin<ProductKind.Soda, SodaForm, SodaPayload> {
//   readonly id = ProductKind.Soda;
//   readonly label = "Soda";
//
//   createDefaultForm(): SodaForm {
//     return { name: "", price: "", brand: "", flavor: "", packageType: "Can", servingSize: "" };
//   }
//   buildItem(f: SodaForm): SodaPayload { return f; }
//
//   FormView = ({ onAdd }: { readonly onAdd: (p: SodaPayload) => void }): JSX.Element => {
//     const [form, setForm] = useState<SodaForm>(this.createDefaultForm());
//     const setField = <K extends keyof SodaForm>(k: K, v: SodaForm[K]) =>
//       setForm(prev => ({ ...prev, [k]: v }));
//
//     return (
//       <div style={{ display: "grid", gap: "0.5rem" }}>
//         <div className="flex flex-row">
//           <label htmlFor="soda_name" style={{ marginRight: "0.5rem" }}>
//             <div>Name</div>
//             <input id="soda_name" value={form.name} onChange={e => setField("name", e.target.value)} />
//           </label>
//           <label htmlFor="soda_price">
//             <div>Price</div>
//             <input id="soda_price" value={form.price} onChange={e => setField("price", e.target.value)} />
//           </label>
//         </div>
//
//         <div className="flex flex-row">
//           <label htmlFor="soda_brand" style={{ marginRight: "0.5rem" }}>
//             <div>Brand</div>
//             <input id="soda_brand" value={form.brand} onChange={e => setField("brand", e.target.value)} />
//           </label>
//           <label htmlFor="soda_flavor" style={{ marginRight: "0.5rem" }}>
//             <div>Flavor</div>
//             <input id="soda_flavor" value={form.flavor} onChange={e => setField("flavor", e.target.value)} />
//           </label>
//         </div>
//
//         <div className="flex flex-row">
//           <label htmlFor="soda_packageType" style={{ marginRight: "0.5rem" }}>
//             <div>Package type</div>
//             <select
//               id="soda_packageType"
//               value={form.packageType}
//               onChange={e => setField("packageType", e.target.value as SodaForm["packageType"])}
//             >
//               <option>Can</option>
//               <option>Plastic Bottle</option>
//               <option>Glass Bottle</option>
//             </select>
//           </label>
//           <label htmlFor="soda_servingSize" style={{ marginRight: "0.5rem" }}>
//             <div>Serving Size</div>
//             <input id="soda_servingSize" value={form.servingSize} onChange={e => setField("servingSize", e.target.value)} />
//           </label>
//         </div>
//
//         <button
//           type="button"
//           className="btn"
//           style={{ background: "#b82b1b", color: "#ffffff" }}
//           onClick={() => { onAdd(this.buildItem(form)); setForm(this.createDefaultForm()); }}
//         >
//           Add Soda
//         </button>
//       </div>
//     );
//   };
//
//   renderItem(item: SodaItem): JSX.Element {
//     return (
//       <div className="product-card">
//         <div className="product-name">{item.payload.name}</div>
//         <p className="product-brand">Brand: {item.payload.brand}</p>
//         {item.payload.flavor && <div className="product-info">Flavor: {item.payload.flavor}</div>}
//         <div className="product-info">
//           Package: {item.payload.packageType}{item.payload.servingSize ? , ${item.payload.servingSize} : ""}
//         </div>
//         <div>Price: <span className="product-price">{item.payload.price}$</span></div>
//       </div>
//     );
//   }
// }
//
// /* ========== SHAMPOO ========== */
//
// type ShampooFormTemplate = {
//   readonly name: string;
//   readonly price: string;
//   readonly brand: string;
//   readonly scent: string;
//   readonly bottleSize: string;
// };
// type ShampooPayload = ShampooFormTemplate;
// type ShampooItem = BaseItem<ProductKind.Shampoo, ShampooPayload>;
//
// class Shampoo extends ProductPlugin<ProductKind.Shampoo, ShampooFormTemplate, ShampooPayload> {
//   readonly id = ProductKind.Shampoo;
//   readonly label = "Shampoo";
//
//   createDefaultForm(): ShampooFormTemplate {
//     return { name: "", price: "", brand: "", scent: "", bottleSize: "" };
//   }
//   buildItem(f: ShampooFormTemplate): ShampooPayload { return f; }
//
//   FormView = ({ onAdd }: { readonly onAdd: (p: ShampooPayload) => void }): JSX.Element => {
//     const [form, setForm] = useState<ShampooFormTemplate>(this.createDefaultForm());
//     const setField = <K extends keyof ShampooFormTemplate>(k: K, v: ShampooFormTemplate[K]) =>
//       setForm(prev => ({ ...prev, [k]: v }));
//
//     return (
//       <div style={{ display: "grid", gap: "0.5rem" }}>
//         <div className="flex flex-row">
//           <label htmlFor="shampoo_name" style={{ marginRight: "0.5rem" }}>
//             <div>Name</div>
//             <input id="shampoo_name" value={form.name} onChange={e => setField("name", e.target.value)} />
//           </label>
//           <label htmlFor="shampoo_price">
//             <div>Price</div>
//             <input id="shampoo_price" value={form.price} onChange={e => setField("price", e.target.value)} />
//           </label>
//         </div>
//
//         <div className="flex flex-row">
//           <label htmlFor="shampoo_brand" style={{ marginRight: "0.5rem" }}>
//             <div>Brand</div>
//             <input id="shampoo_brand" value={form.brand} onChange={e => setField("brand", e.target.value)} />
//           </label>
//           <label htmlFor="shampoo_scent" style={{ marginRight: "0.5rem" }}>
//             <div>Scent</div>
//             <input id="shampoo_scent" value={form.scent} onChange={e => setField("scent", e.target.value)} />
//           </label>
//         </div>
//
//         <div className="flex flex-row">
//           <label htmlFor="shampoo_bottleSize" style={{ marginRight: "0.5rem" }}>
//             <div>Bottle Size</div>
//             <input id="shampoo_bottleSize" value={form.bottleSize} onChange={e => setField("bottleSize", e.target.value)} />
//           </label>
//         </div>
//
//         <button
//           type="button"
//           className="btn"
//           style={{ background: "#36ff3d", color: "#242424" }}
//           onClick={() => { onAdd(this.buildItem(form)); setForm(this.createDefaultForm()); }}
//         >
//           Add Shampoo
//         </button>
//       </div>
//     );
//   };
//
//   renderItem(item: ShampooItem): JSX.Element {
//     return (
//       <div className="product-card">
//         <div className="product-name">
//           {item.payload.name}{item.payload.scent ?  – ${item.payload.scent} : ""}
//         </div>
//         <p className="product-brand">Brand: {item.payload.brand}</p>
//         {item.payload.bottleSize && <div className="product-info">Bottle: {item.payload.bottleSize}</div>}
//         <div>Price: <span className="product-price">{item.payload.price}$</span></div>
//       </div>
//     );
//   }
// }
//
// /* ========== SHOES ========== */
//
// type ShoesForm = {
//   readonly name: string;
//   readonly price: string;
//   readonly brand: string;
//   readonly shoeSize: string;
//   readonly shoeColor: string;
//   readonly gender: "Male" | "Female" | "Unisex";
// };
// type ShoesPayload = ShoesForm;
// type ShoesItem = BaseItem<ProductKind.Shoes, ShoesPayload>;
//
// class Shoes extends ProductPlugin<ProductKind.Shoes, ShoesForm, ShoesPayload> {
//   readonly id = ProductKind.Shoes;
//   readonly label = "Shoes";
//
//   createDefaultForm(): ShoesForm {
//     return { name: "", price: "", brand: "", shoeSize: "", shoeColor: "", gender: "Unisex" };
//   }
//   buildItem(f: ShoesForm): ShoesPayload { return f; }
//
//   FormView = ({ onAdd }: { readonly onAdd: (p: ShoesPayload) => void }): JSX.Element => {
//     const [form, setForm] = useState<ShoesForm>(this.createDefaultForm());
//     const setField = <K extends keyof ShoesForm>(k: K, v: ShoesForm[K]) =>
//       setForm(prev => ({ ...prev, [k]: v }));
//
//     return (
//       <div style={{ display: "grid", gap: "0.5rem" }}>
//         <div className="flex flex-row">
//           <label htmlFor="shoes_name" style={{ marginRight: "0.5rem" }}>
//             <div>Name</div>
//             <input id="shoes_name" value={form.name} onChange={e => setField("name", e.target.value)} />
//           </label>
//           <label htmlFor="shoes_price">
//             <div>Price</div>
//             <input id="shoes_price" value={form.price} onChange={e => setField("price", e.target.value)} />
//           </label>
//         </div>
//
//         <div className="flex flex-row">
//           <label htmlFor="shoes_brand" style={{ marginRight: "0.5rem" }}>
//             <div>Brand</div>
//             <input id="shoes_brand" value={form.brand} onChange={e => setField("brand", e.target.value)} />
//           </label>
//           <label htmlFor="shoes_size" style={{ marginRight: "0.5rem" }}>
//             <div>Shoe size</div>
//             <input id="shoes_size" value={form.shoeSize} onChange={e => setField("shoeSize", e.target.value)} />
//           </label>
//         </div>
//
//         <div className="flex flex-row">
//           <label htmlFor="shoes_color" style={{ marginRight: "0.5rem" }}>
//             <div>Shoe color</div>
//             <input id="shoes_color" value={form.shoeColor} onChange={e => setField("shoeColor", e.target.value)} />
//           </label>
//           <label htmlFor="shoes_gender">
//             <div>Gender</div>
//             <select
//               id="shoes_gender"
//               value={form.gender}
//               onChange={e => setField("gender", e.target.value as ShoesForm["gender"])}
//             >
//               <option>Male</option>
//               <option>Female</option>
//               <option>Unisex</option>
//             </select>
//           </label>
//         </div>
//
//         <button
//           type="button"
//           className="btn"
//           style={{ background: "#19aad8", color: "#242424" }}
//           onClick={() => { onAdd(this.buildItem(form)); setForm(this.createDefaultForm()); }}
//         >
//           Add Shoes
//         </button>
//       </div>
//     );
//   };
//
//   renderItem(item: ShoesItem): JSX.Element {
//     return (
//       <div className="product-card">
//         <div className="product-name">{item.payload.name}</div>
//         <p className="product-brand">Brand: {item.payload.brand}</p>
//         {item.payload.shoeSize && <div className="product-info">Size: {item.payload.shoeSize} (European)</div>}
//         {item.payload.shoeColor && <div className="product-info">Color: {item.payload.shoeColor}</div>}
//         <div className="product-info">Gender: {item.payload.gender}</div>
//         <div>Price: <span className="product-price">{item.payload.price}$</span></div>
//       </div>
//     );
//   }
// }
//
// /* ========== Rejestr i typy pomocnicze ========== */
//
// const registry = {
//   [ProductKind.Soda]: new Soda(),
//   [ProductKind.Shampoo]: new Shampoo(),
//   [ProductKind.Shoes]: new Shoes(),
// } as const;
//
// type PayloadByKind = {
//   [ProductKind.Soda]: SodaPayload;
//   [ProductKind.Shampoo]: ShampooPayload;
//   [ProductKind.Shoes]: ShoesPayload;
// };
//
// type ItemOf<K extends ProductKind> = BaseItem<K, PayloadByKind[K]>;
//
// // Unia wszystkich itemów
// type AnyItem = ItemOf<ProductKind>;
//
// /* ========== App ========== */
//
// export default function App() {
//   const kinds = Object.values(ProductKind) as readonly ProductKind[];
//   const [productType, setProductType] = useState<ProductKind>(ProductKind.Soda);
//   const [allProducts, setAllProducts] = useState<readonly AnyItem[]>([]);
//
//   const plugin = registry[productType];
//
//   const onAdd = (payload: ReturnType<typeof plugin.buildItem>): void => {
//     const item = {
//       id: uid(),
//       productId: plugin.id,
//       payload,
//     } as ItemOf<typeof plugin.id>;
//     setAllProducts(prev => [item, ...prev]);
//   };
//
//   return (
//     <div style={{ display: "flex", gap: "200px", justifyContent: "center", alignItems: "center" }}>
//       <form style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }} onSubmit={e => e.preventDefault()}>
//         <label htmlFor="productType">
//           <div>Product type</div>
//           <select
//             id="productType"
//             value={productType}
//             onChange={e => setProductType(e.target.value as ProductKind)}
//           >
//             {kinds.map(k => (
//               <option key={k} value={k}>{registry[k].label}</option>
//             ))}
//           </select>
//         </label>
//
//         {/* Każdy formularz ma własny stan + Add */}
//         <plugin.FormView onAdd={onAdd} />
//       </form>
//
//       {/* Lista – bez any/unknown/never */}
//       <div className="flex flex-col product-container" style={{ gap: "1rem" }}>
//         {allProducts.map((product) => {
//           const p = registry[product.productId];
//
//           return (
//             <div key={product.id}>
//               {p.renderItem(product)}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }