import { FormEvent, useState } from "react";

import { defaultCarColor } from "@constants/constants";
import { useRace } from "@context/AppContext";
import useCreateCar from "@hooks/useCreateCar";
import Button from "@ui/Button/Button";

import Input from "@ui/Input/Input";

import styles from "./CreateCar.module.css";

function CreateCar() {
  const { isRace, isSingleRace } = useRace();
  const [name, setName] = useState("");
  const [color, setColor] = useState(defaultCarColor);
  const { createNewCar } = useCreateCar();

  const isDeactivate = isRace || !name || !color || isSingleRace;

  const handleCreateCar = (e: FormEvent) => {
    e.preventDefault();
    createNewCar(
      { name, color },
      {
        onSuccess: () => {
          setName("");
          setColor(defaultCarColor);
        },
      },
    );
  };
  return (
    <form className={styles.createCar} onSubmit={handleCreateCar}>
      <Input
        type="text"
        placeholder="Car Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <Button type="submit" size="medium" disabled={isDeactivate}>
        Create
      </Button>
    </form>
  );
}

export default CreateCar;
