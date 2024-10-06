import { Outlet, Link } from "react-router-dom";
import { Footer } from "./Footer";

export function NavHeader() {
  return (
    <div className="min-h-full ">
      <div className="flex py-8 justify-center items-center text-xl md:text-4xl text-[#FF0000] font-FaroVariable uppercase bg-[#FAE498]">
        <Link to="/" className="hover:text-[#85D3A5] mx-12">
          Home
        </Link>
        <Link to="/about" className="hover:text-[#85D3A5] mx-12">
          About
        </Link>
        <Link to="/flavors" className="hover:text-[#85D3A5] mx-12">
          Flavors
        </Link>
        <Link to="/order" className="hover:text-[#85D3A5] mx-12">
          Order
        </Link>
      </div>
      <div className="relative min-h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
