import { ChangeEvent, useState } from "react";

import { ActionTypes, defaultCarColor } from "@constants/constants";
import { useRace } from "@context/AppContext";

const useCreateCarForm = () => {
  const { isRace, isSingleRace, dispatch, createCarInputState } = useRace();
  const [name, setName] = useState(createCarInputState.name);
  const [color, setColor] = useState(
    createCarInputState.color || defaultCarColor,
  );
  const updateInputState = (field: string, value: string) => {
    dispatch({
      type: ActionTypes.UPDATE_CREATE_INPUT,
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

  const resetForm = () => {
    setName("");
    setColor(defaultCarColor);
    updateInputState("name", "");
    updateInputState("color", defaultCarColor);
  };

  return {
    name,
    color,
    isRace,
    isSingleRace,
    handleNameChange,
    handleColorChange,
    resetForm,
  };
};

export default useCreateCarForm;
