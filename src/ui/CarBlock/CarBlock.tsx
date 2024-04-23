/// <reference types="vite-plugin-svgr/client" />

import CarImage from "@assets/images/CarImage.svg?react";
import useDeleteCar from "@hooks/useDeleteCar";
import { Car } from "@interfaces/Car";
import Button from "@ui/Button/Button";

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
  const { name, color, id } = car;
  const { deleteExistingCar } = useDeleteCar();

  const handleSelectCar = () => {
    onSelectCar(car);
  };
  const handleRemoveCar = () => {
    if (id) deleteExistingCar(id);
  };
  const handleStart = () => {
    // ToDo: start
  };
  const handleStop = () => {
    // ToDo: stop
  };

  return (
    <div className={styles.carBlock}>
      <CarRaceControls>
        <Button onClick={handleSelectCar}>Select 👆</Button>
        <Button onClick={handleRemoveCar}>Remove 🗑️</Button>
        <p className={styles.carName}>{name}</p>
      </CarRaceControls>
      <Track>
        <CarRaceControls>
          <Button onClick={handleStart} purpose="start">
            Start
          </Button>
          <Button onClick={handleStop} purpose="stop">
            Stop
          </Button>
        </CarRaceControls>
        <CarImage className={styles.carImage} fill={color} />
        <FinishFlag />
        <TrackLine />
      </Track>
    </div>
  );
}

export default CarBlock;
