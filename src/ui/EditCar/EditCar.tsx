import { useEffect, useState } from "react";

import { defaultCarColor } from "@constants/constants";
import { Car } from "@interfaces/Car";
import Button from "@ui/Button/Button";

import Input from "@ui/Input/Input";

import styles from "./EditCar.module.css";

interface EditCarProps {
  selectedCar: Car | null;
  setSelectedCar: (car: Car | null) => void;
}

function EditCar({ selectedCar, setSelectedCar }: EditCarProps) {
  const [name, setName] = useState("");
  const [color, setColor] = useState(defaultCarColor);

  const handleUpdateCar = (e: React.FormEvent) => {
    e.preventDefault();
    setColor(defaultCarColor);
    setName("");
  };

  useEffect(() => {
    if (selectedCar) {
      setName(selectedCar.name ?? "");
      setColor(selectedCar.color ?? defaultCarColor);
    }
    return () => {
      setSelectedCar(null);
    };
  }, [selectedCar, setSelectedCar]);

  return (
    <form className={styles.editCar} onSubmit={handleUpdateCar}>
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
      <Button type="submit" size="medium">
        Update
      </Button>
    </form>
  );
}

export default EditCar;
