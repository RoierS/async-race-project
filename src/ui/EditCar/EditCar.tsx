import useUpdateCarForm from "@hooks/useUpdateCarForm";
import Button from "@ui/Button/Button";
import Input from "@ui/Input/Input";

import styles from "./EditCar.module.css";

function EditCar() {
  const {
    name,
    color,
    handleNameChange,
    handleColorChange,
    handleUpdateCar,
    selectedCarId,
  } = useUpdateCarForm();

  return (
    <form className={styles.editCar} onSubmit={handleUpdateCar}>
      <Input value={name} onChange={handleNameChange} />
      <Input type="color" value={color} onChange={handleColorChange} />
      <Button type="submit" size="medium" disabled={!selectedCarId}>
        Update
      </Button>
    </form>
  );
}

export default EditCar;
