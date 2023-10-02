const getProducts = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`, {
    next: { revalidate: 100 },
  });
  if (!res.ok) undefined;
  return res.json();
};

export default getProducts;
