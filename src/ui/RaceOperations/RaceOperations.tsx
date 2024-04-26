import useRaceOperations from "@hooks/useRaceOperations";
import Button from "@ui/Button/Button";

import styles from "./RaceOperations.module.css";

function RaceOperations() {
  const { handleRace, handleRaceReset, isRace } = useRaceOperations();

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
