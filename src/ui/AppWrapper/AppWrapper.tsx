import { ReactNode } from "react";

import styles from "./AppWrapper.module.css";

interface AppWrapperProps {
  children: ReactNode;
}

function AppWrapper({ children }: AppWrapperProps) {
  return <div className={styles.AppWrapper}>{children}</div>;
}

export default AppWrapper;
