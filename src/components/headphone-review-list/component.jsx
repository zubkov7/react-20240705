import { useGetReviewsByHeadphoneIdQuery } from "../../redux/services/api";
import { Review } from "../review/component";

export const HeadphoneReviewList = ({ headphoneId }) => {
  const { isFetching, data } = useGetReviewsByHeadphoneIdQuery({
    headphoneId,
  });

  if (isFetching) {
    return <div>...loading</div>;
  }

  if (!data.length) {
    return null;
  }

  return (
    <ul>
      {data.map(({ id, text, user }) => (
        <li key={id}>
          <Review userId={user} text={text} />
        </li>
      ))}
    </ul>
  );
};
