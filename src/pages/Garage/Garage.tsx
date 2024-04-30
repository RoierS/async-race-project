import useTotalCars from "@hooks/useTotalCars";
import { Car } from "@interfaces/Car";
import CarBlock from "@ui/CarBlock/CarBlock";
import CarList from "@ui/CarList/CarList";
import CreateCar from "@ui/CreateCar/CreateCar";
import EditCar from "@ui/EditCar/EditCar";
import ManageGarage from "@ui/ManageGarage/ManageGarage";
import Pagination from "@ui/Pagination/Pagination";
import RaceOperations from "@ui/RaceOperations/RaceOperations";

import styles from "./Garage.module.css";

function Garage() {
  const { carsCount } = useTotalCars();

  return (
    <section className={styles.garage}>
      <ManageGarage>
        <CreateCar />
        <EditCar />
        <RaceOperations />
      </ManageGarage>

      <Pagination count={carsCount} />

      <CarList render={(car: Car) => <CarBlock key={car.id} car={car} />} />
    </section>
  );
}

export default Garage;
