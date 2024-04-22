import { getCars } from "@services/apiGarage";
import { useQuery } from "@tanstack/react-query";

const useCars = () => {
  const {
    isLoading,
    data: cars,
    error,
  } = useQuery({
    queryKey: ["cars"],
    queryFn: () => getCars(),
  });

  return { error, isLoading, cars };
};

export default useCars;
