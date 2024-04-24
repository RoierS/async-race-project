import { RefObject, useRef, useState } from "react";

import { DIST } from "@constants/constants";
import resetCarPosition from "@helpers/resetCarPosition";
import { startStopCarEngine, switchToDriveMode } from "@services/apiGarage";

interface StartStop {
  id: number;
  carRef: RefObject<HTMLImageElement>;
  flagRef: RefObject<HTMLImageElement>;
}

const useCarAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRequestId = useRef<number | null>(null);
  const controller = useRef(new AbortController());
  const startAnimation = async ({ id, carRef, flagRef }: StartStop) => {
    if (!carRef.current || !flagRef.current || !id) return;
    setIsAnimating(true);
    const { velocity, distance } = await startStopCarEngine(id, "started");
    const animationTime = distance / velocity;
    const carElement = carRef.current;
    const trackDistance =
      Math.abs(
        carElement.getBoundingClientRect().left -
          flagRef.current.getBoundingClientRect().left,
      ) + DIST;
    const startTime = performance.now();
    const step = async (currentTime: number) => {
      if (!carElement) return;
      const progress = (currentTime - startTime) / animationTime;
      const newPosition = Math.min(progress * trackDistance, trackDistance);
      carElement.style.transform = `translateX(${newPosition}px) scaleX(-1)`;
      if (progress < 1 && !controller.current.signal.aborted) {
        animationRequestId.current = requestAnimationFrame(step);
      }
    };
    animationRequestId.current = requestAnimationFrame(step);
    const response = await switchToDriveMode(id, controller.current.signal);
    if (!response.success) cancelAnimationFrame(animationRequestId.current);
  };
  const stopAnimation = async ({ id, carRef, flagRef }: StartStop) => {
    if (!carRef.current || !id || !animationRequestId.current) return;
    setIsAnimating(false);
    controller.current.abort();
    await startStopCarEngine(id, "stopped");
    cancelAnimationFrame(animationRequestId.current);
    resetCarPosition({ carRef, flagRef });
    controller.current = new AbortController();
  };
  return { isAnimating, startAnimation, stopAnimation };
};

export default useCarAnimation;
