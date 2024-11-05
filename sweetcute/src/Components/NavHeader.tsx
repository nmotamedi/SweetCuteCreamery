import { Outlet, NavLink } from "react-router-dom";
import { Footer } from "./Footer";

export function NavHeader() {
  return (
    <div className="min-h-full ">
      <div className=" text-base md:text-2xl lg:text-4xl text-[#FF0000] font-FaroVariable uppercase bg-[#FAE498] text-center">
        <div className="flex justify-center items-center w-3/4 m-auto">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "underline basis-1/5"
                : "hover:text-[#85D3A5] basis-1/5"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "underline basis-1/5"
                : "hover:text-[#85D3A5] basis-1/5"
            }
          >
            About
          </NavLink>
          <div className="flex justify-center basis-1/5">
            <img
              alt="Ice Cream Logo"
              src="/SweetCute_IceCream_Illustration.png"
              className="w-full"
            />
          </div>
          <NavLink
            to="/flavors"
            className={({ isActive }) =>
              isActive
                ? "underline basis-1/5"
                : "hover:text-[#85D3A5] basis-1/5"
            }
          >
            Flavors
          </NavLink>
          <NavLink
            to="/order"
            className={({ isActive }) =>
              isActive
                ? "underline basis-1/5"
                : "hover:text-[#85D3A5] basis-1/5"
            }
          >
            Order
          </NavLink>
        </div>
      </div>
      <div className="relative min-h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
