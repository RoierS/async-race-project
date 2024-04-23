import { useState } from "react";

import { Car } from "@interfaces/Car";
import CarBlock from "@ui/CarBlock/CarBlock";
import CarList from "@ui/CarList/CarList";
import CreateCar from "@ui/CreateCar/CreateCar";
import EditCar from "@ui/EditCar/EditCar";
import ManageGarage from "@ui/ManageGarage/ManageGarage";
import PageTitle from "@ui/PageTitle/PageTitle";
import Pagination from "@ui/Pagination/Pagination";
import RaceOperations from "@ui/RaceOperations/RaceOperations";

import styles from "./Garage.module.css";

function Garage() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handleCarSelect = (car: Car) => {
    setSelectedCar(car);
  };

  return (
    <section className={styles.garage}>
      <PageTitle title="Garage" />

      <ManageGarage>
        <CreateCar />
        <EditCar selectedCar={selectedCar} setSelectedCar={setSelectedCar} />
        <RaceOperations />
      </ManageGarage>

      <Pagination />

      <CarList
        render={(car: Car) => (
          <CarBlock key={car.id} car={car} onSelectCar={handleCarSelect} />
        )}
      />
    </section>
  );
}

export default Garage;
