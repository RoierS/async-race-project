import { useState } from "react";

import { FAILED } from "@constants/constants";

import { useRace } from "@context/RaceContext";

import useCarAnimation from "./useCarAnimation";
import useCars from "./useCars";

interface WinnerInfo {
  name: string;
  id: number;
  color: string;
  time: number;
  wins: number;
}

const useRaceOperations = () => {
  const { startAnimation, stopAnimation } = useCarAnimation();
  const { carRefs, isRace, setIsRace } = useRace();
  const { cars } = useCars();
  const [winnerInfo, setWinnerInfo] = useState<WinnerInfo>();

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
    if (winnerCar) {
      setWinnerInfo({
        name: winnerCar.name as string,
        id: winnerCar.id,
        color: winnerCar.color as string,
        time: animationTimes[winnerIndex],
        wins: 1,
      });
    }
  };
  const handleRaceReset = () => {
    setIsRace(false);
    Object.keys(carRefs.current).map((id) => stopAnimation(+id));
  };

  return { winnerInfo, handleRace, handleRaceReset, isRace };
};

export default useRaceOperations;
