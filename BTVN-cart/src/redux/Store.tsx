import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/CartSlide";

// Tạo Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Export type cho TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
