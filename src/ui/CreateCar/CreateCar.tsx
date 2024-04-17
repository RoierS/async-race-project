import Button from "@ui/Button/Button";

import styles from "./CreateCar.module.css";

function CreateCar() {
  const handleClick = () => {
    // ToDO : Add logic
  };

  return (
    <form className={styles.createCar}>
      <input className={styles.nameInput} type="text" placeholder="Car Name" />
      <input className={styles.colorInput} type="color" />
      <Button type="button" onClick={handleClick} size="medium">
        Create
      </Button>
    </form>
  );
}

export default CreateCar;
