import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductElement } from "../../types/product";

// Định nghĩa interface cho CartItem
export interface CartItem extends ProductElement {
  quantity: number;
}

// Định nghĩa trạng thái ban đầu của giỏ hàng
interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

// Tạo slice cho giỏ hàng
const cartSlide = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductElement>) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
      }
    },
  },
});

// Export actions để sử dụng trong component
export const { addToCart, removeFromCart } = cartSlide.actions;

// Export reducer
export default cartSlide.reducer;
