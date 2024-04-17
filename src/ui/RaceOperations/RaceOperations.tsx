import styles from "./RaceOperations.module.css";

function RaceOperations() {
  return (
    <div className={styles.formContainer}>
      <button type="button" className={styles.race}>
        Race
      </button>
      <button type="button" className={styles.reset}>
        Reset
      </button>
      <button type="button" className={styles.generate}>
        Generate cars
      </button>
    </div>
  );
}

export default RaceOperations;
