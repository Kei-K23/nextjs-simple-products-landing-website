const getProductsForSpecificCategory = async (p: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/category/${p}`, {
    next: { revalidate: 100 },
  });
  if (!res.ok) undefined;
  return res.json();
};

export default getProductsForSpecificCategory;
