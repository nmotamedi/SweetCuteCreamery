import { Outlet, NavLink } from "react-router-dom";
import { Footer } from "./Footer";

export function NavHeader() {
  return (
    <div className="min-h-full ">
      <div className="flex py-8 justify-center items-center text-base md:text-4xl text-[#FF0000] font-FaroVariable uppercase bg-[#FAE498]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "mx-3 md:mx-12 underline"
              : "hover:text-[#85D3A5] mx-3 md:mx-12"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "mx-3 md:mx-12 underline"
              : "hover:text-[#85D3A5] mx-3 md:mx-12"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/flavors"
          className={({ isActive }) =>
            isActive
              ? "mx-3 md:mx-12 underline"
              : "hover:text-[#85D3A5] mx-3 md:mx-12"
          }
        >
          Flavors
        </NavLink>
        <NavLink
          to="/order"
          className={({ isActive }) =>
            isActive
              ? "mx-3 md:mx-12 underline"
              : "hover:text-[#85D3A5] mx-3 md:mx-12"
          }
        >
          Order
        </NavLink>
      </div>
      <div className="relative min-h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
