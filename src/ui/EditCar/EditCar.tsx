import styles from "./EditCar.module.css";

function EditCar() {
  return (
    <form className={styles.editCar}>
      <input className={styles.nameInput} type="text" placeholder="Car Name" />
      <input className={styles.colorInput} type="color" />
      <button type="button" className={styles.carButton}>
        Update
      </button>
    </form>
  );
}

export default EditCar;
