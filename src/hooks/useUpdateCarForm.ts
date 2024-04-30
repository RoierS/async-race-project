import { ChangeEvent, useEffect, useState } from "react";

import { ActionTypes, defaultCarColor } from "@constants/constants";
import { useRace } from "@context/AppContext";

const useUpdateCarForm = () => {
  const { dispatch, editCarInputState, selectedCar } = useRace();
  const [name, setName] = useState(editCarInputState.name);
  const [color, setColor] = useState(editCarInputState.color);
  const [selectedCarId, setSelectedCarId] = useState<number | null>(null);
  const resetForm = () => {
    setColor(defaultCarColor);
    setName("");
    setSelectedCarId(null);
    dispatch({ type: ActionTypes.SELECT_CAR, payload: null });
  };
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
  };
  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
  };
  useEffect(() => {
    if (selectedCar) {
      setName(selectedCar.name);
      setColor(selectedCar.color);
      setSelectedCarId(selectedCar.id);
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
    resetForm,
  };
};

export default useUpdateCarForm;
