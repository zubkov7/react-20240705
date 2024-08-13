export async function getHeadphoneById(id) {
  const result = await fetch(`http://localhost:3001/api/product/${id}`, {
    next: {
      revalidate: 2,
    },
  });

  return result.json();
}
