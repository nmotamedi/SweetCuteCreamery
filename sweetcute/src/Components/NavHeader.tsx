import { Outlet, Link } from "react-router-dom";
import { Footer } from "./Footer";

export function NavHeader() {
  return (
    <div className="min-h-full bg-[#F4F2EA] ">
      <div className="flex justify-center w-full bg-[#FFB6AE]">
        <h2>Full website coming soon!</h2>
      </div>
      <div className="flex justify-evenly items-center shadow-lg text-xl md:text-3xl ">
        {/* <Link to="/" className="hover:text-[#85D3A5]">
          Home
        </Link> */}
        {/* <Link to="/about" className="hover:text-[#85D3A5]">
          About
        </Link> */}

        <Link to="/flavors" className="hover:text-[#85D3A5]">
          Flavors
        </Link>
        <Link to="/">
          <div className="h-28">
            <img
              src="/SweetCute_Logo_CircleSticker.png"
              alt="Sweet Cute Creamery Logo"
              className="h-full"
            />
          </div>
        </Link>
        <Link to="/order" className="hover:text-[#85D3A5]">
          Order
        </Link>
      </div>
      <div className="relative p-4 pb-8 min-h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
