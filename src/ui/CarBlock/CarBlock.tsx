/// <reference types="vite-plugin-svgr/client" />

import CarImage from "@assets/images/CarImage.svg?react";
import { Car } from "@interfaces/Car";
import Button from "@ui/Button/Button";

import CarRaceControls from "@ui/CarRaceControls/CarRaceControls";
import FinishFlag from "@ui/FinishFlag/FinishFlag";

import Track from "@ui/Track/Track";

import TrackLine from "@ui/TrackLine/TrackLine";

import styles from "./CarBlock.module.css";

interface CarBlockProps {
  car: Car;
}

function CarBlock({ car }: CarBlockProps) {
  const { name, color } = car;

  const handleSelectCar = () => {
    // ToDo: select car
  };
  const handleRemoveCar = () => {
    // ToDo: remove car
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
