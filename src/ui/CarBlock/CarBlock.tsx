import { useRef, useState } from "react";

import { defaultCarColor } from "@constants/constants";
import startAnimation from "@helpers/startAnimation";
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
  const [animationInProgress, setAnimationInProgress] = useState(false);
  const carImageRef = useRef<HTMLImageElement | null>(null);
  const flagImageRef = useRef<HTMLImageElement | null>(null);
  const handleStart = async () => {
    if (!animationInProgress && id) {
      setAnimationInProgress(true);
      const controller = new AbortController();
      await startAnimation({
        id,
        signal: controller.signal,
        carImageRef,
        flagImageRef,
        setAnimationInProgress,
      });
    }
  };
  return (
    <div className={styles.carBlock}>
      <CarRaceControls>
        <Button onClick={() => onSelectCar(car)}>Select 👆</Button>
        <Button onClick={() => id && deleteExistingCar(id)}>Remove 🗑️</Button>
        <p className={styles.carName}>{name}</p>
      </CarRaceControls>
      <Track>
        <Button onClick={handleStart} purpose="start">
          Start
        </Button>
        <Button purpose="stop">Stop</Button>
        <CarImageWrapper carImageRef={carImageRef} color={color} />
        <FinishFlag flagRef={flagImageRef} />
        <TrackLine />
      </Track>
    </div>
  );
}

export default CarBlock;
