import useCreateRandomCars from "@hooks/useCreateRabdomCars";
import useRaceOperations from "@hooks/useRaceOperations";
import Button from "@ui/Button/Button";

import styles from "./RaceOperations.module.css";

function RaceOperations() {
  const { handleRace, handleRaceReset, isRace } = useRaceOperations();
  const { createRandomCars, isPending } = useCreateRandomCars();

  return (
    <div className={styles.raceOperations}>
      <Button onClick={handleRace} purpose="race" disabled={isRace}>
        Race
      </Button>
      <Button onClick={handleRaceReset} disabled={!isRace}>
        Reset
      </Button>
      <Button onClick={createRandomCars} disabled={isRace || isPending}>
        Generate cars
      </Button>
    </div>
  );
}

export default RaceOperations;
