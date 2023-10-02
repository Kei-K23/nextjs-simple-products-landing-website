import Image from "next/image";

type Props = {
  product: Products;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="rounded-2xl shadow-xl shadow-slate-800">
      <Image
        src={product.image}
        alt={product.title}
        className="w-full h-[250px]"
        width={100}
        height={0}
      />

      <div className="p-4">
        <h2 className="text-lg font-bold">{product.title}</h2>
        <h2 className="text-lg">
          $ <span className="text-green-500">{product.price}</span>{" "}
        </h2>
        <p className="text-lg mt-4 break-words">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
