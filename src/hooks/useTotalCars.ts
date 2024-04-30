import { getTotalCarCount } from "@services/apiGarage";
import { useQuery } from "@tanstack/react-query";

const useTotalCars = () => {
  const {
    isLoading,
    data: carsCount = 0,
    error,
  } = useQuery({
    queryKey: ["cars-count"],
    queryFn: getTotalCarCount,
  });

  return { error, isLoading, carsCount };
};

export default useTotalCars;
