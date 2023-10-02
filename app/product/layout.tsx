import { Metadata } from "next";
import BtnContainer from "./components/BtnContainer";

export const metadata: Metadata = {
  title: "Products",
};

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <BtnContainer />
      {children}
    </main>
  );
};

export default ProductsLayout;
