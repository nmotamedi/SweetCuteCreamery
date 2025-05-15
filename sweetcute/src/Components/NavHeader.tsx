import { Outlet, NavLink } from "react-router-dom";
import { Footer } from "./Footer";

export function NavHeader() {
  return (
    <div className="min-h-full">
      <div className=" text-base md:text-2xl lg:text-4xl text-[#FF0000] font-FaroVariable uppercase bg-[#FAE498] text-center">
        <div className="flex justify-center items-center w-full md:w-3/4 m-auto">
          <div className="flex justify-center basis-1/6">
            <img
              alt="Ice Cream Logo"
              src="/SweetCute_IceCream_Illustration.png"
              className="w-full lg:w-3/4"
            />
          </div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "underline basis-1/6"
                : "hover:text-[#85D3A5] basis-1/6"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "underline basis-1/6"
                : "hover:text-[#85D3A5] basis-1/6"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/flavors"
            className={({ isActive }) =>
              isActive
                ? "underline basis-1/6"
                : "hover:text-[#85D3A5] basis-1/6"
            }
          >
            Flavors
          </NavLink>
          <NavLink
            to="/catering"
            className={({ isActive }) =>
              isActive
                ? "underline basis-1/6"
                : "hover:text-[#85D3A5] basis-1/6"
            }
          >
            Catering
          </NavLink>
          <NavLink
            to="/order"
            className={({ isActive }) =>
              isActive
                ? "underline basis-1/6"
                : "hover:text-[#85D3A5] basis-1/6"
            }
          >
            Order
          </NavLink>
        </div>
      </div>
      <div className="relative min-h-full w-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
