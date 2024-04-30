/// <reference types="vite-plugin-svgr/client" />

import { RefObject } from "react";

import CarImage from "@assets/images/CarImage.svg?react";

import styles from "./CarImageWrapper.module.css";

interface CarImageWrapperProps {
  carImageRef?: RefObject<HTMLDivElement>;
  color: string;
}

function CarImageWrapper({ carImageRef, color }: CarImageWrapperProps) {
  return (
    <div ref={carImageRef} className={styles.carImage}>
      <CarImage fill={color} />
    </div>
  );
}

export default CarImageWrapper;
