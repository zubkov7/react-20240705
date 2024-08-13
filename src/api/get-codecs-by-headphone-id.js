export async function getCodecsByHeadphoneId(id) {
  const result = await fetch(
    `http://localhost:3001/api/codecs?productId=${id}`
  );

  return result.json();
}
