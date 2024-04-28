import { getTotalWinnersCount } from "@services/apiWinners";
import { useQuery } from "@tanstack/react-query";

const useTotalWinners = () => {
  const {
    isLoading,
    data: winnersCount = 0,
    error,
  } = useQuery({
    queryKey: ["winners-count"],
    queryFn: getTotalWinnersCount,
  });

  return { error, isLoading, winnersCount };
};

export default useTotalWinners;
