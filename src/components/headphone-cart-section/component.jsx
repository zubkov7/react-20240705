import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addCartItem,
  removeCartItem,
  selectCartItemAmountById,
} from "../../redux/ui/cart/cart";
import { Counter } from "../counter/component";

export const HeadphoneCartSection = ({ id }) => {
  const dispatch = useDispatch();

  const amount = useSelector((state) => selectCartItemAmountById(state, id));

  const addItem = () => {
    dispatch(addCartItem(id));
  };

  const removeItem = () => {
    dispatch(removeCartItem(id));
  };

  return (
    <div>
      <Counter value={amount} increment={addItem} decrement={removeItem} />
    </div>
  );
};
