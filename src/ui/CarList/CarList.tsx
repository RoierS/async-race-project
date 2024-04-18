import CarBlock from "@ui/CarBlock/CarBlock";

import styles from "./CarList.module.css";

function CarList() {
  return (
    <div className={styles.carList}>
      <CarBlock />
      <CarBlock />
      <CarBlock />
      <CarBlock />
      <CarBlock />
      <CarBlock />
      <CarBlock />
    </div>
  );
}

export default CarList;
