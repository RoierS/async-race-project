import { getTotalCarCount } from "@services/apiGarage";
import { useQuery } from "@tanstack/react-query";

const useTotalCars = () => {
  const {
    isLoading,
    data: carsCount,
    error,
  } = useQuery({
    queryKey: ["cars-count"],
    queryFn: getTotalCarCount,
  });

  return { error, isLoading, carsCount };
};

export default useTotalCars;
