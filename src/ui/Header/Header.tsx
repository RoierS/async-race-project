import HeaderNav from "../HeaderNav/HeaderNav";
import HeadingText from "../HeadingText/HeadingText";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <HeadingText />
      <HeaderNav />
    </header>
  );
}

export default Header;
