import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export function NavHeader() {
  return (
    <div className="min-h-full h-lvh ">
      <div className="flex justify-evenly items-center shadow-lg text-3xl">
        <Link to="/" className="hover:text-[#85D3A5]">
          Home
        </Link>
        <Link to="/about" className="hover:text-[#85D3A5]">
          About
        </Link>
        <Link to="/">
          <div className="h-48">
            <img
              src="/SweetCute_Logo_CircleSticker.png"
              alt="Sweet Cute Creamery Logo"
              className="h-full"
            />
          </div>
        </Link>
        <Link to="/flavors" className="hover:text-[#85D3A5]">
          Flavors
        </Link>
        <Link to="/order" className="hover:text-[#85D3A5]">
          Order
        </Link>
      </div>
      <div className="relative p-4 pb-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
