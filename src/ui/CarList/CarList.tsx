import styles from "./CarList.module.css";

function CarList() {
  return (
    <ul className={styles.carList}>
      <li>
        <div>car1</div>
      </li>
      <li>
        <div>car2</div>
      </li>
      <li>
        <div>car3</div>
      </li>
    </ul>
  );
}

export default CarList;
