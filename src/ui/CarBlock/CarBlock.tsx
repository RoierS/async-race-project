import { useRef } from "react";

import { defaultCarColor } from "@constants/constants";
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
  const { deleteExistingCar } = useDeleteCar();
  const carRef = useRef<HTMLImageElement | null>(null);
  const flagRef = useRef<HTMLImageElement | null>(null);
  const { isAnimating, startAnimation, stopAnimation } = useCarAnimation();
  const handleStart = () => id && startAnimation({ id, carRef, flagRef });
  const handleStop = () => id && stopAnimation({ id, carRef, flagRef });
  return (
    <div className={styles.carBlock}>
      <CarRaceControls>
        <Button onClick={() => onSelectCar(car)} disabled={isAnimating}>
          Select 👆
        </Button>
        <Button
          onClick={() => id && deleteExistingCar(id)}
          disabled={isAnimating}
        >
          Remove 🗑️
        </Button>
        <p className={styles.carName}>{name}</p>
      </CarRaceControls>
      <Track>
        <Button onClick={handleStart} purpose="start" disabled={isAnimating}>
          Start
        </Button>
        <Button onClick={handleStop} purpose="stop" disabled={!isAnimating}>
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
