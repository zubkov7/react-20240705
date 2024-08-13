export async function getReviewsByHeadphoneId(id) {
  const result = await fetch(
    `http://localhost:3001/api/reviews?productId=${id}`
  );

  return result.json();
}
