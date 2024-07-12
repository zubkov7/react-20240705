import { CounterContainer } from "../counter/container";
import { Review } from "../review/component";

export const Headphone = ({ name, brand, reviews, price }) => {
  if (!name) {
    return null;
  }

  return (
    <div>
      <h3>
        {brand} - {name}
        <span style={{ marginLeft: "10px" }}>{price}</span>
      </h3>
      {reviews?.length ? (
        <ul>
          {reviews.map((text) => (
            <Review text={text} />
          ))}
        </ul>
      ) : null}
      <CounterContainer />
    </div>
  );
};
