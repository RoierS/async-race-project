import { FAILED } from "@constants/constants";

import { useRace } from "@context/RaceContext";

import convertTimeToSeconds from "@helpers/convertToSeconds";
import {
  createWinner,
  getAllWinners,
  updateWinner,
} from "@services/apiWinners";

import useCarAnimation from "./useCarAnimation";
import useCars from "./useCars";

/* eslint-disable max-lines-per-function */
const useRaceOperations = () => {
  const { startAnimation, stopAnimation } = useCarAnimation();
  const { carRefs, isRace, setIsRace } = useRace();
  const { cars } = useCars();
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
        name: winnerCar.name,
        id: winnerCar.id,
        color: winnerCar.color,
        time: winnerTime,
        wins: 1,
      };
      const winners = await getAllWinners();
      const existingWinner = winners.find(
        (winner) => winner.id === winnerData.id,
      );
      if (existingWinner) {
        const updatedWinner = {
          ...existingWinner,
          wins: existingWinner.wins + 1,
          time:
            existingWinner.time > winnerTime ? existingWinner.time : winnerTime,
        };
        await updateWinner(winnerData.id, updatedWinner);
      } else {
        createWinner(winnerData);
      }
    }
  };
  const handleRaceReset = () => {
    setIsRace(false);
    Object.keys(carRefs.current).map((id) => stopAnimation(+id));
  };
  return { handleRace, handleRaceReset, isRace };
};

export default useRaceOperations;
