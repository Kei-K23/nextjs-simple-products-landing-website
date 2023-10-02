import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-center text-3xl mt-10 font-bold">
        Explore various products for your choice
      </h1>
      <div className="flex justify-center items-center mt-10">
        <Link href={"/product"} className="btn">
          Shop Now
        </Link>
      </div>
    </main>
  );
}
