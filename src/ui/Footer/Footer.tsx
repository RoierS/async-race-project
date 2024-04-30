import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Link
        to="https://github.com/roiers"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./github-icon.svg" alt="link to github" />
      </Link>
      <p>© {currentYear}</p>
    </footer>
  );
}

export default Footer;
