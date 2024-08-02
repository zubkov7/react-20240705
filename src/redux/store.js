import { configureStore } from "@reduxjs/toolkit";
import { headphoneSlice } from "./entities/headphone";
import { codecSlice } from "./entities/codec";
import { userSlice } from "./entities/user";
import { reviewSlice } from "./entities/review";
import { cartSlice } from "./ui/cart/cart";
import { requestSlice } from "./ui/request/request";

export const store = configureStore({
  reducer: {
    [headphoneSlice.name]: headphoneSlice.reducer,
    [codecSlice.name]: codecSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
  },
  // middleware: (getDefaultMiddlewares) =>
  //   getDefaultMiddlewares().concat(() => (next) => (action) => {
  //     console.log(action);

  //     next(action);
  //   }),
});
