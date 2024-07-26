import { CounterContainer } from "../counter/container";
import { ReviewForm } from "../review-form/component";
import { Review } from "../review/component";

import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphone";
import { Codec } from "../codec/component";

export const Headphone = ({ id }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  console.log(headphone);

  const {
    name,
    brand,
    reviews: reviewsIds,
    price,
    codecs: codecsIds,
  } = headphone || {};

  if (!name) {
    return null;
  }

  return (
    <div>
      <h3>{name}</h3>
      {brand && <div>Brand - {brand}</div>}
      {price && <div>Price - {price}</div>}
      {reviewsIds?.length ? (
        <div>
          reviews:
          <ul>
            {reviewsIds.map((id) => (
              <li>
                <Review id={id} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {codecsIds?.length ? (
        <div>
          codecs:
          <ul>
            {codecsIds.map((id) => (
              <li>
                <Codec id={id} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <CounterContainer />
      <ReviewForm />
    </div>
  );
};
