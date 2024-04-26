/* eslint-disable max-lines-per-function */
import { useRef, useState } from "react";

import { DIST, FAILED } from "@constants/constants";
import { useRace } from "@context/RaceContext";
import resetCarPosition from "@helpers/resetCarPosition";
import { startStopCarEngine, switchToDriveMode } from "@services/apiGarage";

const useCarAnimation = () => {
  const { carRefs, flagRefObj, isRace } = useRace();
  const [isAnimating, setIsAnimating] = useState<{ [key: number]: boolean }>(
    {},
  );
  const animationRequestIds = useRef<{ [key: number]: number | null }>({});
  const controller = useRef(new AbortController());

  const startAnimation = async (id: number) => {
    const currentCar = carRefs.current[id].current;
    const currentFlag = flagRefObj.current[id].current;
    if (currentCar && currentFlag) {
      setIsAnimating((prev) => ({ ...prev, [id]: true }));
      const { velocity, distance } = await startStopCarEngine(id, "started");
      const animationTime = distance / velocity;
      const trackDistance =
        Math.abs(
          currentCar.getBoundingClientRect().left -
            currentFlag.getBoundingClientRect().left,
        ) + DIST;
      const startTime = performance.now();

      const step = async (currentTime: number) => {
        if (!currentCar) return;
        const progress = (currentTime - startTime) / animationTime;
        const newPosition = Math.min(progress * trackDistance, trackDistance);
        currentCar.style.transform = `translateX(${newPosition}px) scaleX(-1)`;
        if (progress < 1 && !controller.current.signal.aborted) {
          animationRequestIds.current[id] = requestAnimationFrame(step);
        }
      };

      animationRequestIds.current[id] = requestAnimationFrame(step);

      const response = await switchToDriveMode(id, controller.current.signal);
      if (!response.success) {
        cancelAnimationFrame(animationRequestIds.current[id]);
        return FAILED;
      }
      return animationTime;
    }
    return FAILED;
  };

  const stopAnimation = async (id: number) => {
    const currentCar = carRefs.current[id].current;
    const currentFlag = flagRefObj.current[id].current;
    if (!currentCar || !animationRequestIds.current[id] || !currentFlag) return;
    setIsAnimating((prev) => ({ ...prev, [id]: false }));
    controller.current.abort();
    await startStopCarEngine(id, "stopped");
    cancelAnimationFrame(animationRequestIds.current[id]);
    resetCarPosition({ currentCar, currentFlag });
    controller.current = new AbortController();
  };
  return { isRace, isAnimating, startAnimation, stopAnimation };
};

export default useCarAnimation;
