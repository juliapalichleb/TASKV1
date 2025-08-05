export interface ShoeState {
    name: string;
    price: number;
    brand?: string;
    shoeSize?: string;
    shoeColor?: string;
    gender: 'Male' | 'Female';
}

export type ShoeAction =
  | { type: 'add'; payload: string }
  | { type: 'remove'; payload: string };

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'add':
      return { ...state, items: [...state.items, action.payload] };
    case 'remove':
      return { ...state, items: state.items.filter(item => item !== action.payload) };
    default:
      return state;
  }
};