/* eslint-disable max-lines-per-function */
import { useEffect, useRef } from "react";

import { ActionTypes, defaultCarColor } from "@constants/constants";
import { useRace } from "@context/AppContext";
import useCarAnimation from "@hooks/useCarAnimation";
import useDeleteCar from "@hooks/useDeleteCar";
import { Car } from "@interfaces/Car";
import Button from "@ui/Button/Button";
import CarImageWrapper from "@ui/CarImageWrapper/CarImageWrapper";
import CarRaceControls from "@ui/CarRaceControls/CarRaceControls";
import FinishFlag from "@ui/FinishFlag/FinishFlag";
import Track from "@ui/Track/Track";
import TrackLine from "@ui/TrackLine/TrackLine";

import styles from "./CarBlock.module.css";

interface CarBlockProps {
  car: Car;
  onSelectCar: (car: Car) => void;
}

function CarBlock({ car, onSelectCar }: CarBlockProps) {
  const { color = defaultCarColor, name, id } = car;
  const { carRefs, flagRefObj, isRace, dispatch } = useRace();
  const { deleteExistingCar } = useDeleteCar(id);
  const { isAnimating, startAnimation, stopAnimation } = useCarAnimation();
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
  const handleRemove = () => deleteExistingCar(id);

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

  return (
    <div className={styles.carBlock}>
      <CarRaceControls>
        <Button
          onClick={() => onSelectCar(car)}
          disabled={isAnimating[id] || isRace}
        >
          Select 👆
        </Button>
        <Button onClick={handleRemove} disabled={isAnimating[id] || isRace}>
          Remove 🗑️
        </Button>
        <p className={styles.carName}>{name}</p>
      </CarRaceControls>
      <Track>
        <Button
          onClick={handleStart}
          purpose="start"
          disabled={isAnimating[id] || isRace}
        >
          Start
        </Button>
        <Button
          onClick={handleStop}
          purpose="stop"
          disabled={!isAnimating[id] || isRace}
        >
          Stop
        </Button>
        <CarImageWrapper carImageRef={carRef} color={color} />
        <FinishFlag flagRef={flagRef} />
        <TrackLine />
      </Track>
    </div>
  );
}

export default CarBlock;
