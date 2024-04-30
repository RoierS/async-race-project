import { useRef, useEffect } from "react";

import { ActionTypes } from "@constants/constants";
import { useRace } from "@context/AppContext";
import useCarAnimation from "@hooks/useCarAnimation";
import useDeleteCar from "@hooks/useDeleteCar";
import { Car } from "@interfaces/Car";

// eslint-disable-next-line max-lines-per-function
const useCarBlock = ({ id }: { id: number }) => {
  const { carRefs, flagRefObj, isRace, dispatch } = useRace();
  const { deleteExistingCar } = useDeleteCar(id);
  const { startAnimation, stopAnimation, isAnimating } = useCarAnimation();
  const carRef = useRef<HTMLImageElement | null>(null);
  const flagRef = useRef<HTMLImageElement | null>(null);
  const handleStart = () => {
    dispatch({ type: ActionTypes.IS_SINGLE_RACE, payload: true });
    startAnimation(id);
  };
  const handleStop = () => {
    stopAnimation(id);
    dispatch({ type: ActionTypes.IS_SINGLE_RACE, payload: false });
  };
  const handleRemove = async () => {
    dispatch({ type: ActionTypes.SELECT_CAR, payload: null });
    deleteExistingCar(id);
  };
  const handleSelectCar = (carToEdit: Car) =>
    dispatch({ type: ActionTypes.SELECT_CAR, payload: carToEdit });
  useEffect(() => {
    const carRefsCurrent = carRefs.current;
    const flagRefObjCurrent = flagRefObj.current;
    carRefsCurrent[id] = carRef;
    flagRefObjCurrent[id] = flagRef;
    return () => {
      delete carRefsCurrent[id];
      delete flagRefObjCurrent[id];
    };
  }, [carRefs, flagRefObj, id]);
  return {
    carRef,
    flagRef,
    handleStart,
    handleStop,
    handleRemove,
    handleSelectCar,
    isAnimating,
    isRace,
  };
};

export default useCarBlock;
