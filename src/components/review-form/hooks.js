import { useReducer } from "react";

const INITIAL_FORM = {
  text: "",
  rating: 5,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "setText":
      return {
        ...state,
        text: payload,
      };
    default:
      return state;
  }
}

export const useForm = ({ text }) => {
  const [form, dispatch] = useReducer(reducer, {
    ...INITIAL_FORM,
    text,
  });

  const updateText = (text) => dispatch({ type: "setText", payload: text });

  return {
    form,
    updateText,
  };
};
