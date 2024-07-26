import { useReducer } from "react";

const INITIAL_FORM = {
  name: "",
  text: "",
  address: "",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "setName":
      return {
        ...INITIAL_FORM,
        name: payload,
      };
    case "setText":
      return {
        ...state,
        text: payload,
      };
    case "setAddress":
      return {
        ...state,
        address: payload,
      };
    case "clear":
      return INITIAL_FORM;
    default:
      return state;
  }
}

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

  const updateName = (name) => dispatch({ type: "setName", payload: name });
  const updateText = (text) => dispatch({ type: "setText", payload: text });
  const clear = () => dispatch({ type: "clear" });
  const updateAddress = (address) =>
    dispatch({ type: "setAddress", payload: address });

  return {
    form,
    updateName,
    updateText,
    clear,
    updateAddress,
  };
};
