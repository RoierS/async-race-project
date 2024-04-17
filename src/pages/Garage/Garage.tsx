import CarList from "@ui/CarList/CarList";
import CreateCar from "@ui/CreateCar/CreateCar";
import EditCar from "@ui/EditCar/EditCar";
import ManageGarage from "@ui/ManageGarage/ManageGarage";
import PageTitle from "@ui/PageTitle/PageTitle";
import Pagination from "@ui/Pagination/Pagination";
import RaceOperations from "@ui/RaceOperations/RaceOperations";

import styles from "./Garage.module.css";

function Garage() {
  return (
    <section className={styles.garage}>
      <PageTitle title="Garage" />

      <ManageGarage>
        <CreateCar />
        <EditCar />
        <RaceOperations />
      </ManageGarage>

      <Pagination />

      <CarList />
    </section>
  );
}

export default Garage;
