import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphone";

export const CartItem = ({ id, amount }) => {
  const { name } = useSelector((state) => selectHeadphoneById(state, id));

  if (!name) {
    return null;
  }

  return (
    <div>
      {name} - {amount}
    </div>
  );
};
