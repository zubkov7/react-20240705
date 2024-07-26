import { createSlice } from "@reduxjs/toolkit";
import { normalizedCodecs } from "../../../constants/normalized-mock";

const initialState = {
  entities: normalizedCodecs.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedCodecs.map(({ id }) => id),
};

export const codecSlice = createSlice({
  name: "codec",
  initialState,
  selectors: {
    selectCodecById: (state, id) => state.entities[id],
  },
});

export const { selectCodecById } = codecSlice.selectors;
