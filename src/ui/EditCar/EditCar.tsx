import { useEffect, useState } from "react";

import { defaultCarColor } from "@constants/constants";
import useUpdateCar from "@hooks/useUpdateCar";
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
  const [selectedCarId, setSelectedCarId] = useState<number | null>(null);
  const { updateExistingCar } = useUpdateCar();
  const handleUpdateCar = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCarId) {
      updateExistingCar({
        carId: selectedCarId,
        car: { name, color, id: selectedCarId },
      });
    }
    setColor(defaultCarColor);
    setName("");
    setSelectedCarId(null);
  };
  useEffect(() => {
    if (selectedCar) {
      setName(selectedCar.name ?? "");
      setColor(selectedCar.color ?? defaultCarColor);
      setSelectedCarId(selectedCar?.id ?? null);
    }
    return () => setSelectedCar(null);
  }, [selectedCar, setSelectedCar]);
  return (
    <form className={styles.editCar} onSubmit={handleUpdateCar}>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <Input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <Button type="submit" size="medium" disabled={!selectedCarId}>
        Update
      </Button>
    </form>
  );
}

export default EditCar;
