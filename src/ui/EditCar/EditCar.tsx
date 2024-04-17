import Button from "@ui/Button/Button";

import styles from "./EditCar.module.css";

function EditCar() {
  const handleClick = () => {
    // ToDO : Add logic
  };

  return (
    <form className={styles.editCar}>
      <input className={styles.nameInput} type="text" placeholder="Car Name" />
      <input className={styles.colorInput} type="color" />
      <Button type="button" onClick={handleClick} size="medium">
        Update
      </Button>
    </form>
  );
}

export default EditCar;
