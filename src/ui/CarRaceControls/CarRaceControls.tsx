import styles from "./CarRaceControls.module.css";

function CarRaceControls({ children }: { children: React.ReactNode }) {
  return <div className={styles.controlBtns}>{children}</div>;
}

export default CarRaceControls;
