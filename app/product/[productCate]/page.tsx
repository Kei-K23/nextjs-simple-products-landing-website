import ProductsList from "@/app/components/ProductsList";
import getProducts from "@/lib/getProducts";
import getProductsForSpecificCategory from "@/lib/getProductsForSpecificCategory";
import type { Metadata } from "next";

type Props = {
  params: {
    productCate: string;
  };
};

export function generateStaticParams() {
  const cates = [
    "all",
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ];
  return cates.map((cate) => ({
    productCate: cate,
  }));
}

export function generateMetadata({ params: { productCate } }: Props): Metadata {
  if (productCate === "all") {
    return {
      title: "Products",
      description: "This is all products",
    };
  } else {
    switch (productCate) {
      case "men's%20clothing":
        return {
          title: "Men's clothing",
          description: "This is men clothing",
        };
      case "women's%20clothing":
        return {
          title: "Women's clothing",
          description: "This is women clothing",
        };
      case "jewelery":
        return {
          title: "Jewelery",
          description: "This is Jewelery",
        };
      case "electronics":
        return {
          title: "Electronics",
          description: "This is electronics",
        };
      default:
        return {
          title: "Products",
          description: "This is all products",
        };
    }
  }
}

const ProductCate = async ({ params: { productCate } }: Props) => {
  let products: Products[] = [];

  const productData = getProducts();
  products = await productData;

  if (productCate === "all") {
    const productData = getProducts();
    products = await productData;
  } else {
    const productsData = getProductsForSpecificCategory(productCate);
    products = await productsData;
  }

  return (
    <div>
      <h1></h1>
      <ProductsList products={products} />
    </div>
  );
};

export default ProductCate;
