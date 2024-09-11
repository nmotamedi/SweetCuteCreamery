import { NavLink, Outlet } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-8 justify-center py-8">
        <li>
          <NavLink to="/"> Home </NavLink>
        </li>
        <li>
          <NavLink to="/about"> About </NavLink>
        </li>
        <li>Logo</li>
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
    </nav>
  );
}
