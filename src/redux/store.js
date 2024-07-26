import { configureStore } from "@reduxjs/toolkit";
import { headphoneSlice } from "./entities/headphone";
import { codecSlice } from "./entities/codec";
import { userSlice } from "./entities/user";
import { reviewSlice } from "./entities/review";

export const store = configureStore({
  reducer: {
    [headphoneSlice.name]: headphoneSlice.reducer,
    [codecSlice.name]: codecSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
  },
});
