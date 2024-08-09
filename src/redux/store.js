import { configureStore } from "@reduxjs/toolkit";
import { codecSlice } from "./entities/codec";
import { userSlice } from "./entities/user";
import { cartSlice } from "./ui/cart/cart";
import { apiSlice } from "./services/api";
import { authSlice } from "./ui/auth/auth";

export const store = configureStore({
  reducer: {
    [codecSlice.name]: codecSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
