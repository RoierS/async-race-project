interface IResetCarPosition {
  currentCar: HTMLImageElement;
  currentFlag: HTMLImageElement;
}

const resetCarPosition = ({ currentCar, currentFlag }: IResetCarPosition) => {
  if (currentCar && currentFlag) {
    const carImage = currentCar;
    carImage.style.transform = `translateX(0px) scaleX(-1)`;
  }
};

export default resetCarPosition;
