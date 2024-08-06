import { HeadphoneLink } from "../headphone-link/components";
import { useGetHeadphonesQuery } from "../../redux/services/api";

export const HeadphonesList = () => {
  const { isLoading, isError, data } = useGetHeadphonesQuery();

  if (isLoading) {
    return <div>...loading</div>;
  }

  if (isError) {
    return <div>error</div>;
  }

  if (!data.length) {
    return null;
  }

  return (
    <ul>
      {data.map(({ id, name }) => (
        <li key={id}>
          <HeadphoneLink id={id} name={name} />
        </li>
      ))}
    </ul>
  );
};
