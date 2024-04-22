import useCars from "@hooks/useCars";
import { Car } from "@interfaces/Car";

import CarBlock from "@ui/CarBlock/CarBlock";

import styles from "./CarList.module.css";

function CarList() {
  const { cars } = useCars();

  return (
    <div className={styles.carList}>
      {cars?.map((car: Car) => <CarBlock key={car.id} car={car} />)}
    </div>
  );
}

export default CarList;
