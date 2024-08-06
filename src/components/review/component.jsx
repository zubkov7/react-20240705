import { User } from "../user/component";

export const Review = ({ text, userId }) => {
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
