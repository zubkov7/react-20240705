import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review";
import { User } from "../user/component";

export const Review = ({ id }) => {
  const { text, user: userId } =
    useSelector((state) => selectReviewById(state, id)) || {};

  if (!text) {
    return null;
  }

  return (
    <div>
      {text}
      {userId && (
        <span>
          {" "}
          - <User id={userId} />
        </span>
      )}
    </div>
  );
};
