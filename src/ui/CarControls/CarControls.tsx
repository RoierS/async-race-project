import styles from "./CarControls.module.css";

function CarControls({ children }: { children: React.ReactNode }) {
  return <div className={styles.carControls}>{children}</div>;
}

export default CarControls;
