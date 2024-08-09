import { useSelector } from "react-redux";
import { User } from "../user/component";
import { selectAuthState } from "../../redux/ui/auth/auth";
import { useState } from "react";
import { ReviewForm } from "../review-form/component";
import { useCallback } from "react";
import { useUpdateReviewMutation } from "../../redux/services/api";

export const Review = ({ text, userId, reviewId, headphoneId }) => {
  const { userId: currentUserId } = useSelector(selectAuthState);
  const [mode, setMode] = useState("view");

  const [updateReview, { isLoading }] = useUpdateReviewMutation();
  const handleUpdateReview = useCallback(
    async (review) => {
      updateReview({
        review: { ...review, user: currentUserId, id: reviewId },
        headphoneId,
      });

      setMode("view");
    },
    [updateReview, currentUserId, reviewId, headphoneId]
  );

  if (!text) {
    return null;
  }

  return (
    <div>
      {mode === "view" && (
        <>
          {text}
          <span>
            {" "}
            - <User id={userId} />
          </span>
        </>
      )}

      {mode === "edit" && (
        <ReviewForm
          text={text}
          onSave={handleUpdateReview}
          isReviewLoading={isLoading}
        />
      )}

      {mode === "view" && currentUserId === userId && (
        <button onClick={() => setMode("edit")}>edit</button>
      )}
      {mode === "edit" && (
        <button onClick={() => setMode("view")}>cancel</button>
      )}
    </div>
  );
};
