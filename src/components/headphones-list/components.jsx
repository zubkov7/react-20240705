import { useSelector } from "react-redux";
import { selectHeadphonesIds } from "../../redux/entities/headphone";
import { HeadphoneLink } from "../headphone-link/components";

export const HeadphonesList = () => {
  const ids = useSelector(selectHeadphonesIds);

  if (!ids.length) {
    return null;
  }

  return (
    <ul>
      {ids.map((id) => (
        <li key={id}>
          <HeadphoneLink id={id} />
        </li>
      ))}
    </ul>
  );
};
