import { useParams } from "react-router-dom";
import { Headphone } from "../headphone/component";

export const HeadphonePage = () => {
  const { headphoneId } = useParams();

  return <Headphone id={headphoneId} />;
};
