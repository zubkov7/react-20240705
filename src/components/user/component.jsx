import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/user";

export const User = ({ id }) => {
  const { name } = useSelector((state) => selectUserById(state, id)) || {};

  if (!name) {
    return null;
  }

  return <div>By {name}</div>;
};
