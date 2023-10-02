import Link from "next/link";

const BtnContainer = () => {
  return (
    <div className="mt-4 page-padding w-full flex justify-center items-center gap-4 flex-wrap">
      <Link className="btn" href={"/product/all"}>
        All
      </Link>
      <Link
        className="btn"
        href={`/product/${encodeURIComponent("men's clothing")}`}
      >
        Men clothing
      </Link>
      <Link
        className="btn"
        href={`/product/${encodeURIComponent("women's clothing")}`}
      >
        Women clothing
      </Link>
      <Link className="btn" href={"/product/jewelery"}>
        Jewelery
      </Link>
      <Link className="btn" href={"/product/electronics"}>
        Electronics
      </Link>
    </div>
  );
};

export default BtnContainer;
