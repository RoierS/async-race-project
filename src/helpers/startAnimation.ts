/* eslint-disable no-console */
import { startStopCarEngine, switchToDriveMode } from "@services/apiGarage";

const DIST = 60;

interface StartAnimationParams {
  id: number;
  signal: AbortSignal;
  carImageRef: React.RefObject<HTMLElement>;
  flagImageRef: React.RefObject<HTMLElement>;
  setAnimationInProgress: React.Dispatch<React.SetStateAction<boolean>>;
}

const startAnimation = async ({
  id,
  signal,
  carImageRef,
  flagImageRef,
  setAnimationInProgress,
}: StartAnimationParams) => {
  if (!carImageRef.current || !flagImageRef.current || !id) return;
  try {
    let animationRequestId: number | null = null;
    const carImage = carImageRef.current;
    const flagImage = flagImageRef.current;
    const { velocity, distance } = await startStopCarEngine(id, "started");
    const animationTime = Math.round(distance / velocity);
    const trackDistance =
      Math.abs(
        carImage.getBoundingClientRect().left -
          flagImage.getBoundingClientRect().left,
      ) + DIST;
    const startTime = performance.now();
    const animateCar = (progress: number) => {
      carImage.style.transform = `translateX(${Math.min(Math.round(progress * trackDistance), trackDistance)}px) scaleX(-1)`;
    };
    const step = (currentTime: number) => {
      const progress = (currentTime - startTime) / animationTime;
      animateCar(Math.min(progress, 1));
      animationRequestId = requestAnimationFrame(step);
    };
    animationRequestId = requestAnimationFrame(step);
    const response = await switchToDriveMode(id, signal);
    if (!response.success) {
      cancelAnimationFrame(animationRequestId);
      setAnimationInProgress(false);
    }
  } catch (error) {
    console.error(error);
    setAnimationInProgress(false);
  }
};

export default startAnimation;
