import { carModels, carBrands } from "@constants/constants";

const generateRandomCarName = () => {
  const randomBrand = carBrands[Math.floor(Math.random() * carBrands.length)];
  const randomModel = carModels[Math.floor(Math.random() * carModels.length)];

  return `${randomBrand} ${randomModel}`;
};

export default generateRandomCarName;
