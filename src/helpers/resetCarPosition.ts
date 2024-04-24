interface IResetCarPosition {
  carRef: React.RefObject<HTMLImageElement>;
  flagRef: React.RefObject<HTMLImageElement>;
}

const resetCarPosition = ({ carRef, flagRef }: IResetCarPosition) => {
  if (carRef.current && flagRef.current) {
    const carImage = carRef.current;

    carImage.style.transform = `translateX(0px) scaleX(-1)`;
  }
};

export default resetCarPosition;
