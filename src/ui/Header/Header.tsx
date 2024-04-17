import Logo from "@ui/Logo/Logo";

import HeaderNav from "../HeaderNav/HeaderNav";
import HeadingText from "../HeadingText/HeadingText";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Logo />

      <HeadingText />

      <HeaderNav />
    </header>
  );
}

export default Header;
