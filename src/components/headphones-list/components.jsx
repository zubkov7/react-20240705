import { useSelector } from "react-redux";
import { selectHeadphonesIds } from "../../redux/entities/headphone";
import { Headphone } from "../headphone/component";

export const HeadphonesList = () => {
  const ids = useSelector(selectHeadphonesIds);

  if (!ids.length) {
    return null;
  }

  return (
    <ul>
      {ids.map((id) => (
        <li>
          <Headphone id={id} />
        </li>
      ))}
    </ul>
  );
};
