import { useSelector } from "react-redux";
import { selectCodecById } from "../../redux/entities/codec";

export const Codec = ({ id }) => {
  const { type } = useSelector((state) => selectCodecById(state, id)) || {};

  if (!type) {
    return null;
  }

  return <div>{type}</div>;
};
