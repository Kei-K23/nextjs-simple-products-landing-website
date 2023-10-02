import ProductCard from "./ProductCard";

type Props = {
  products: Products[];
};

const ProductsList = ({ products }: Props) => {
  return (
    <>
      <div className="mt-16 page-padding grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
