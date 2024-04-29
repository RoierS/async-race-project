/* eslint-disable max-lines-per-function */
import { useEffect, useRef } from "react";

import { defaultCarColor } from "@constants/constants";
import { useRace } from "@context/RaceContext";
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
  const { carRefs, flagRefObj } = useRace();
  const { deleteExistingCar } = useDeleteCar(id);
  const { isRace, isAnimating, startAnimation, stopAnimation } =
    useCarAnimation();
  const carRef = useRef<HTMLImageElement | null>(null);
  const flagRef = useRef<HTMLImageElement | null>(null);
  const handleStart = () => startAnimation(id);
  const handleStop = () => stopAnimation(id);
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
        <Button onClick={() => onSelectCar(car)} disabled={isAnimating[id]}>
          Select 👆
        </Button>
        <Button onClick={handleRemove} disabled={isAnimating[id]}>
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
        <Button onClick={handleStop} purpose="stop" disabled={!isAnimating[id]}>
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
