import { useRace } from "@context/AppContext";
import { NavLink } from "react-router-dom";

import styles from "./HeaderNav.module.css";

function HeaderNav() {
  const { garagePage, winnersPage } = useRace();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to={`garage?page=${garagePage}`}>Garage</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to={`winners?page=${winnersPage}`}>Winners</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
