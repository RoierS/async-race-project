/* eslint-disable max-lines-per-function */
import { ChangeEvent, useEffect, useState } from "react";

import { ActionTypes, defaultCarColor } from "@constants/constants";
import { useRace } from "@context/AppContext";
import useUpdateCar from "@hooks/useUpdateCar";

const useUpdateCarForm = () => {
  const { dispatch, editCarInputState, selectedCar } = useRace();
  const [name, setName] = useState(editCarInputState.name);
  const [color, setColor] = useState(editCarInputState.color);
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

  const updateInputState = (field: string, value: string) => {
    dispatch({
      type: ActionTypes.UPDATE_EDIT_INPUT,
      payload: { field, value },
    });
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    updateInputState("name", newName);
  };

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    updateInputState("color", newColor);
  };

  useEffect(() => {
    if (selectedCar) {
      setName(selectedCar.name ?? "");
      setColor(selectedCar.color ?? defaultCarColor);
      setSelectedCarId(selectedCar?.id ?? null);
    } else {
      setName("");
      setColor(defaultCarColor);
      setSelectedCarId(null);
    }
  }, [selectedCar]);

  return {
    name,
    color,
    selectedCarId,
    handleNameChange,
    handleColorChange,
    handleUpdateCar,
  };
};

export default useUpdateCarForm;
