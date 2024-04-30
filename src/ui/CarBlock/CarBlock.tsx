import { defaultCarColor } from "@constants/constants";
import { Car } from "@interfaces/Car";
import Button from "@ui/Button/Button";
import CarImageWrapper from "@ui/CarImageWrapper/CarImageWrapper";
import CarRaceControls from "@ui/CarRaceControls/CarRaceControls";
import FinishFlag from "@ui/FinishFlag/FinishFlag";
import Track from "@ui/Track/Track";
import TrackLine from "@ui/TrackLine/TrackLine";

import useCarBlock from "./useCarBlock";

import styles from "./CarBlock.module.css";

interface CarBlockProps {
  car: Car;
}

function CarBlock({ car }: CarBlockProps) {
  const { color = defaultCarColor, name, id } = car;
  const {
    carRef,
    flagRef,
    handleStart,
    handleStop,
    handleRemove,
    handleSelectCar,
    isAnimating,
    isRace,
  } = useCarBlock(car);
  const isDisabled = isAnimating[id] || isRace;
  const stopDisabled = !isAnimating[id] || isRace;
  return (
    <div className={styles.carBlock}>
      <CarRaceControls>
        <Button onClick={handleStart} purpose="start" disabled={isDisabled}>
          Start
        </Button>
        <Button onClick={handleStop} purpose="stop" disabled={stopDisabled}>
          Stop
        </Button>
        <Button onClick={() => handleSelectCar(car)} disabled={isDisabled}>
          👆
        </Button>
        <Button onClick={handleRemove} disabled={isDisabled}>
          🗑️
        </Button>
        <p className={styles.carName}>{name}</p>
      </CarRaceControls>
      <Track>
        <CarImageWrapper carImageRef={carRef} color={color} />
        <FinishFlag flagRef={flagRef} />
        <TrackLine />
      </Track>
    </div>
  );
}

export default CarBlock;
