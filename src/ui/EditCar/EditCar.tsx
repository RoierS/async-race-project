import useUpdateCar from "@hooks/useUpdateCar";
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
    resetForm,
    selectedCarId,
  } = useUpdateCarForm();
  const { updateExistingCar } = useUpdateCar();

  const handleUpdateCar = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCarId) {
      updateExistingCar({
        carId: selectedCarId,
        car: { name, color, id: selectedCarId },
      });
    }
    resetForm();
  };

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
