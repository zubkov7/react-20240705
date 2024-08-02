import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getHeadphones } from "./get-headphones";

const entityAdapter = createEntityAdapter();

export const headphoneSlice = createSlice({
  name: "headphone",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getHeadphones.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
  selectors: {
    selectHeadphoneById: (state, id) => state.entities[id],
    selectHeadphonesIds: (state) => state.ids,
  },
});

export const { selectHeadphoneById, selectHeadphonesIds } =
  headphoneSlice.selectors;
