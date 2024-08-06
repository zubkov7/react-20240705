import { ReviewForm } from "../review-form/component";

import { Codec } from "../codec/component";
import { HeadphoneCartSection } from "../headphone-cart-section/component";
import { useGetHeadphonesQuery } from "../../redux/services/api";
import { HeadphoneReviewList } from "../headphone-review-list/component";

export const Headphone = ({ id }) => {
  const { data } = useGetHeadphonesQuery(undefined, {
    selectFromResult: ({ data, ...rest }) => ({
      ...rest,
      data: data?.find((entity) => entity.id === id),
    }),
  });

  const {
    name,
    brand,
    reviews: reviewsIds,
    price,
    codecs: codecsIds,
  } = data || {};

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
          <HeadphoneReviewList headphoneId={id} />
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
      <ReviewForm headphoneId={id} />
    </div>
  );
};
