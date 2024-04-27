import { getAllWinners } from "@services/apiWinners";
import { useQuery } from "@tanstack/react-query";

const useAllWinners = () => {
  const {
    isLoading,
    data: winners,
    error,
  } = useQuery({
    queryKey: ["winners"],
    queryFn: () => getAllWinners(),
  });

  return { error, isLoading, winners };
};

export default useAllWinners;
