import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/ui/cart/cart";
import { CartItem } from "../cart-item/component";

export const Cart = () => {
  const items = useSelector(selectCartItems);

  return (
    <div>
      {items.length ? (
        <ul>
          {items.map(({ itemId, amount }) => (
            <li key={itemId}>
              <CartItem id={itemId} amount={amount} />
            </li>
          ))}
        </ul>
      ) : (
        "empty cart"
      )}
    </div>
  );
};
