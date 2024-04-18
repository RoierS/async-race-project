import Button from "@ui/Button/Button";

import styles from "./RaceOperations.module.css";

function RaceOperations() {
  const handleRace = () => {
    // TODO: implement race logic
  };
  const handleRaceReset = () => {
    // TODO: implement reset logic
  };
  const handleGenereCars = () => {
    // TODO: implement generate cars logic
  };

  return (
    <div className={styles.raceOperations}>
      <Button type="button" onClick={handleRace} purpose="race">
        Race
      </Button>
      <Button type="button" onClick={handleRaceReset}>
        Reset
      </Button>
      <Button type="button" onClick={handleGenereCars}>
        Generate cars
      </Button>
    </div>
  );
}

export default RaceOperations;
