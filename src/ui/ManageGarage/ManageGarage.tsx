import { ReactNode } from "react";

import styles from "./ManageGarage.module.css";

function ManageGarage({ children }: { children: ReactNode }) {
  return <div className={styles.manageGarage}>{children}</div>;
}

export default ManageGarage;
