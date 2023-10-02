const getCategories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories", {
    next: { revalidate: 100 },
  });
  if (!res.ok) undefined;
  return res.json();
};
