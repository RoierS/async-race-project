import { ReactNode } from "react";

import styles from "./Track.module.css";

interface TrackProps {
  children: ReactNode;
}

function Track({ children }: TrackProps) {
  return <div className={styles.track}>{children}</div>;
}

export default Track;
