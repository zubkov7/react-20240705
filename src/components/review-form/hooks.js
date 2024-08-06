import { useReducer } from "react";
import { useAddReviewMutation } from "../../redux/services/api";
import { useCallback } from "react";

const INITIAL_FORM = {
  text: "",
  user: "hr83h29h9h9u12h9213",
  rating: 3,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "setText":
      return {
        ...state,
        text: payload,
      };
    case "clear":
      return INITIAL_FORM;
    default:
      return state;
  }
}

export const useForm = ({ headphoneId }) => {
  const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

  const [addReview, { isLoading }] = useAddReviewMutation();

  const updateText = (text) => dispatch({ type: "setText", payload: text });
  const clear = () => dispatch({ type: "clear" });
  const handleAddReview = useCallback(() => {
    addReview({ headphoneId, review: form });
  }, [addReview, form, headphoneId]);

  return {
    form,
    updateText,
    clear,
    addReview: handleAddReview,
    isReviewLoading: isLoading,
  };
};
