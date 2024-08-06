import { configureStore } from "@reduxjs/toolkit";
import { codecSlice } from "./entities/codec";
import { userSlice } from "./entities/user";
import { cartSlice } from "./ui/cart/cart";
import { requestSlice } from "./ui/request/request";
import { apiSlice } from "./services/api";

export const store = configureStore({
  reducer: {
    [codecSlice.name]: codecSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
