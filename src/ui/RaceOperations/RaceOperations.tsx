/* eslint-disable max-lines-per-function */
import { ActionTypes } from "@constants/constants";
import { useRace } from "@context/AppContext";
import useCreateRandomCars from "@hooks/useCreateRandomCars";
import useRaceOperations from "@hooks/useRaceOperations";
import Button from "@ui/Button/Button";

import styles from "./RaceOperations.module.css";

function RaceOperations() {
  const { isRace, isSingleRace, dispatch } = useRace();
  const { handleRace, handleRaceReset } = useRaceOperations();
  const { createRandomCars, isPending } = useCreateRandomCars();
  const handleClick = (button: string, actionFn: () => void) => {
    if (button === "race") {
      dispatch({
        type: ActionTypes.IS_RACE,
        payload: true,
      });
    }

    if (button === "reset") {
      dispatch({
        type: ActionTypes.IS_RACE,
        payload: false,
      });
    }
    actionFn();
  };

  return (
    <div className={styles.raceOperations}>
      <Button
        onClick={() => handleClick("race", handleRace)}
        purpose="race"
        disabled={isRace || isSingleRace}
      >
        Race
      </Button>
      <Button
        onClick={() => handleClick("reset", handleRaceReset)}
        disabled={!isRace}
      >
        Reset
      </Button>
      <Button
        onClick={() => handleClick("generate", createRandomCars)}
        disabled={isRace || isPending || isSingleRace}
      >
        Generate cars
      </Button>
    </div>
  );
}

export default RaceOperations;
