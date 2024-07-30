import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/ui/cart/cart";

export const Cart = () => {
  const items = useSelector(selectCartItems);

  return (
    <div>
      {items.length ? (
        <ul>
          {items.map(({ itemId, amount }) => (
            <li key={itemId}>
              {itemId} - {amount}
            </li>
          ))}
        </ul>
      ) : (
        "empty cart"
      )}
    </div>
  );
};
