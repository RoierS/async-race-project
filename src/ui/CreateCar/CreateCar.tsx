import styles from "./CreateCar.module.css";

function CreateCar() {
  return (
    <form className={styles.createCar}>
      <input className={styles.nameInput} type="text" placeholder="Car Name" />
      <input className={styles.colorInput} type="color" />
      <button type="button" className={styles.carButton}>
        Create
      </button>
    </form>
  );
}

export default CreateCar;
