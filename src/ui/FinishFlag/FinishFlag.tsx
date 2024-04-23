import { RefObject } from "react";

import styles from "./FinishFlag.module.css";

function FinishFlag({ flagRef }: { flagRef: RefObject<HTMLImageElement> }) {
  return (
    <img
      ref={flagRef}
      className={styles.finishFlag}
      src="/flag-icon.svg"
      alt="finish flag"
    />
  );
}

export default FinishFlag;
