import { useSelector } from "react-redux";
import { selectHeadphonesIds } from "../../redux/entities/headphone";
import { HeadphoneLink } from "../headphone-link/components";
import { getHeadphones } from "../../redux/entities/headphone/get-headphones";
import { useRequest } from "../../hooks/use-request";

export const HeadphonesList = () => {
  const ids = useSelector(selectHeadphonesIds);

  const requestStatus = useRequest(getHeadphones);

  if (requestStatus === "pending") {
    return <div>...loading</div>;
  }

  if (requestStatus === "rejected") {
    return <div>error</div>;
  }

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
