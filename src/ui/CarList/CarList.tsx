import { ReactNode } from "react";

import useCars from "@hooks/useCars";
import { Car } from "@interfaces/Car";

import styles from "./CarList.module.css";

function CarList({ render }: { render: (car: Car) => ReactNode }) {
  const { cars } = useCars();

  return <div className={styles.carList}>{cars?.map(render)}</div>;
}

export default CarList;
