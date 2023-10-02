import Link from "next/link";

const Navbar = () => {
  return (
    <header className="shadow-xl shadow-slate-800 text-white">
      <nav className="page-padding ">
        <Link className="text-xl hover:text-sky-600" href={"/"}>
          ShopWithME 🛍️
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
