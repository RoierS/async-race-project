import { NavLink } from "react-router-dom";

function HeaderNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="garage">Garage</NavLink>
        </li>
        <li>
          <NavLink to="winners">Winners</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
