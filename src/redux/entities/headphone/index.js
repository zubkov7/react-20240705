import { createSlice } from "@reduxjs/toolkit";
import { normalizedHeadphones } from "../../../constants/normalized-mock";

const initialState = {
  entities: normalizedHeadphones.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedHeadphones.map(({ id }) => id),
};

export const headphoneSlice = createSlice({
  name: "headphone",
  initialState,
  selectors: {
    selectHeadphoneById: (state, id) => state.entities[id],
    selectHeadphonesIds: (state) => state.ids,
  },
});

export const { selectHeadphoneById, selectHeadphonesIds } =
  headphoneSlice.selectors;
