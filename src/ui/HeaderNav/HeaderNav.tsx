import { NavLink } from "react-router-dom";

import styles from "./HeaderNav.module.css";

function HeaderNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="garage">Garage</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="winners">Winners</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
