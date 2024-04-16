import styles from "./HeadingText.module.css";

function HeadingText() {
  return (
    <div>
      <h1 className={styles.title}>Async Race</h1>
      <h2 className={styles.text}>Most wanted</h2>
    </div>
  );
}

export default HeadingText;
