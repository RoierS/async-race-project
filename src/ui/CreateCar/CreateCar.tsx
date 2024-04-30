import { FormEvent } from "react";

import useCreateCar from "@hooks/useCreateCar";
import useCreateCarForm from "@hooks/useCreateCarForm";
import Button from "@ui/Button/Button";
import Input from "@ui/Input/Input";

import styles from "./CreateCar.module.css";

function CreateCar() {
  const { createNewCar } = useCreateCar();
  const {
    name,
    color,
    isRace,
    isSingleRace,
    handleNameChange,
    handleColorChange,
    resetForm,
  } = useCreateCarForm();

  const isDeactivate = isRace || !name || !color || isSingleRace;

  const handleCreateCar = (e: FormEvent) => {
    e.preventDefault();
    createNewCar({ name, color, id: 0 }, {});
    resetForm();
  };
  return (
    <form className={styles.createCar} onSubmit={handleCreateCar}>
      <Input
        type="text"
        placeholder="Car Name"
        value={name}
        onChange={handleNameChange}
      />
      <Input type="color" value={color} onChange={handleColorChange} />
      <Button type="submit" size="medium" disabled={isDeactivate}>
        Create
      </Button>
    </form>
  );
}

export default CreateCar;
