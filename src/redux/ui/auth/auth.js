import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthorized: true,
    userId: "jg4985gj94",
  },
  selectors: {
    selectAuthState: (state) => state,
  },
});

export const { selectAuthState } = authSlice.selectors;
