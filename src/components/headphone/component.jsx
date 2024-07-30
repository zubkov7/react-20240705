import { ReviewForm } from "../review-form/component";
import { Review } from "../review/component";

import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphone";
import { Codec } from "../codec/component";
import { HeadphoneCartSection } from "../headphone-cart-section/component";

export const Headphone = ({ id }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

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
              <li key={id}>
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
              <li key={id}>
                <Codec id={id} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <HeadphoneCartSection id={id} />
      <ReviewForm />
    </div>
  );
};
