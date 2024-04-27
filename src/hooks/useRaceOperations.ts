import { FAILED } from "@constants/constants";

import { useRace } from "@context/RaceContext";

import convertTimeToSeconds from "@helpers/convertToSeconds";

import useCarAnimation from "./useCarAnimation";
import useCars from "./useCars";
import useCreateWinner from "./useCreateWinner";

const useRaceOperations = () => {
  const { startAnimation, stopAnimation } = useCarAnimation();
  const { carRefs, isRace, setIsRace } = useRace();
  const { cars } = useCars();
  const { createUpdateWinner } = useCreateWinner();

  const handleRace = async () => {
    setIsRace(true);
    const animationTimes = await Promise.all(
      Object.keys(carRefs.current).map((id) => startAnimation(+id)),
    );
    const winnerIndex = animationTimes.indexOf(
      Math.min(...animationTimes.filter((time) => time !== FAILED && time)),
    );
    const winnerId = Object.keys(carRefs.current)[winnerIndex];
    const winnerCar = cars?.find((car) => car.id === +winnerId);
    const winnerTime = convertTimeToSeconds(animationTimes[winnerIndex]);
    if (winnerCar) {
      const winnerData = {
        id: winnerCar.id,
        wins: 1,
        time: winnerTime,
        name: winnerCar.name,
        color: winnerCar.color,
      };
      createUpdateWinner(winnerData);
    }
  };
  const handleRaceReset = () => {
    setIsRace(false);
    Object.keys(carRefs.current).map((id) => stopAnimation(+id));
  };
  return { handleRace, handleRaceReset, isRace };
};

export default useRaceOperations;
