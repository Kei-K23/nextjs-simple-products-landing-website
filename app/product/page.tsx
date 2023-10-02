import ProductsList from "@/app/components/ProductsList";
import getProducts from "@/lib/getProducts";
import getProductsForSpecificCategory from "@/lib/getProductsForSpecificCategory";

type Props = {
  params: {
    productCate: string;
  };
};

const Products = async ({ params: { productCate } }: Props) => {
  let products: Products[] = [];

  const productData = getProducts();
  products = await productData;

  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
};

export default Products;
