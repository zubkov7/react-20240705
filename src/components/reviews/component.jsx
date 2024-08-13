import { Review } from "../review/component";

export async function getReviewsByHeadphoneId(id) {
  const result = await fetch(
    `http://localhost:3001/api/reviews?productId=${id}`
  );

  return result.json();
}

export const Reviews = async ({ headphoneId }) => {
  const data = await getReviewsByHeadphoneId(headphoneId);

  return (
    <div>
      <ul>
        {data.map(({ text, rating, id }) => (
          <li key={id}>
            <Review text={text} rating={rating} />
          </li>
        ))}
      </ul>
    </div>
  );
};
