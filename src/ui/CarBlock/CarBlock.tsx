import Button from "@ui/Button/Button";

import FinishFlag from "@ui/FinishFlag/FinishFlag";

import carImage from "../../../public/car-img.svg";

import styles from "./CarBlock.module.css";

function CarBlock() {
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
      <div className={styles.controlBtns}>
        <Button onClick={handleSelectCar}>Select 👆</Button>
        <Button onClick={handleRemoveCar}>Remove 🗑️</Button>
        <p className={styles.carName}>#car.name</p>
      </div>

      <div className={styles.track}>
        <div className={styles.carControls}>
          <Button onClick={handleStart} purpose="start">
            Start
          </Button>
          <Button onClick={handleStop} purpose="stop">
            Stop
          </Button>
        </div>

        <img className={styles.carImage} src={carImage} alt="car" />
        {/* TODO: <div className={styles.carImage} id="car.id">{createCarImage(color)}</div> */}
        <FinishFlag />
        <div className={styles.line} />
      </div>
    </div>
  );
}

export default CarBlock;
