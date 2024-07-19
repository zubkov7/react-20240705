import { CounterContainer } from "../counter/container";
import { ReviewForm } from "../review-form/component";
import { Review } from "../review/component";
import classnames from "classnames";

import styles from "./styles.module.css";

export const Headphone = ({
  name,
  brand,
  reviews,
  price,
  extraStyle = false,
}) => {
  if (!name) {
    return null;
  }

  return (
    <div>
      <h3>
        {brand} - {name}
        <span className={styles.price1}>
          <span className={styles.price2}>{price}</span>
        </span>
      </h3>
      {reviews?.length ? (
        <ul>
          {reviews.map((text) => (
            <Review text={text} />
          ))}
        </ul>
      ) : null}
      <CounterContainer />
      <ReviewForm />
    </div>
  );
};
