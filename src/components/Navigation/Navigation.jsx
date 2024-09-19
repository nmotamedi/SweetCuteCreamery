import { NavLink, Outlet } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-8 justify-center py-8 relative uppercase">
        <li>
          <NavLink to="/"> Home </NavLink>
        </li>
        <li>
          <NavLink to="/about"> About </NavLink>
        </li>
        <li>
          <NavLink to="/"> Logo </NavLink>
        </li>
        <li>
          <NavLink to="/flavors"> Flavors </NavLink>
        </li>
        <li>
          <NavLink to="/order"> Order </NavLink>
        </li>
      </ul>
      <div>
        <div className="mx-8">
          <Outlet />
        </div>
      </div>
      <div className="w-full bg-blue-800 flex justify-center absolute bottom-0">
        <a
          href="https://www.instagram.com/sweetcutecreamery/"
          className="text-white"
        >
          Follow us on Instagram!
        </a>
      </div>
    </nav>
  );
}
