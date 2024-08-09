import { useCallback } from "react";
import {
  useAddReviewMutation,
  useGetReviewsByHeadphoneIdQuery,
} from "../../redux/services/api";
import { ReviewForm } from "../review-form/component";
import { Review } from "../review/component";
import { useSelector } from "react-redux";
import { selectAuthState } from "../../redux/ui/auth/auth";

export const HeadphoneReviewList = ({ headphoneId }) => {
  const { userId: currentUserId } = useSelector(selectAuthState);

  const { isFetching, data } = useGetReviewsByHeadphoneIdQuery({
    headphoneId,
  });

  const [addReview, { isLoading }] = useAddReviewMutation();
  const handleAddReview = useCallback(
    (review) => {
      addReview({ headphoneId, review: { ...review, user: currentUserId } });
    },
    [addReview, headphoneId, currentUserId]
  );

  if (isFetching) {
    return <div>...loading</div>;
  }

  if (!data.length) {
    return null;
  }

  return (
    <div>
      <ul>
        {data.map(({ id, text, user }) => (
          <li key={id}>
            <Review
              userId={user}
              text={text}
              reviewId={id}
              headphoneId={headphoneId}
            />
          </li>
        ))}
      </ul>
      <h3>New review</h3>
      <ReviewForm isReviewLoading={isLoading} onSave={handleAddReview} />
    </div>
  );
};
