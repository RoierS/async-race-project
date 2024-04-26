import { useRace } from "@context/RaceContext";
import useCarAnimation from "@hooks/useCarAnimation";
import Button from "@ui/Button/Button";

import styles from "./RaceOperations.module.css";

function RaceOperations() {
  const { startAnimation, stopAnimation } = useCarAnimation();
  const { carRefs, isRace, setIsRace } = useRace();

  const handleRace = () => {
    setIsRace(true);
    Object.entries(carRefs.current).forEach(([id]) => {
      startAnimation(parseInt(id, 10));
    });
  };
  const handleRaceReset = () => {
    setIsRace(false);
    Object.entries(carRefs.current).forEach(([id]) => {
      stopAnimation(parseInt(id, 10));
    });
  };
  const handleGenereCars = () => {
    // TODO: implement generate cars logic
  };
  return (
    <div className={styles.raceOperations}>
      <Button onClick={handleRace} purpose="race" disabled={isRace}>
        Race
      </Button>
      <Button onClick={handleRaceReset} disabled={!isRace}>
        Reset
      </Button>
      <Button onClick={handleGenereCars} disabled={isRace}>
        Generate cars
      </Button>
    </div>
  );
}

export default RaceOperations;
