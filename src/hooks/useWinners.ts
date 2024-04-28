import { PAGE_SIZE } from "@constants/constants";
import { getWinners } from "@services/apiWinners";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import useTotalWinners from "./useTotalWinners";

const useWinners = () => {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const { winnersCount = 0 } = useTotalWinners();

  const page = Number(searchParams.get("page")) || 1;

  const {
    isLoading,
    data: winners,
    error,
  } = useQuery({
    queryKey: ["winners", page],
    queryFn: () => getWinners({ page }),
  });

  const pageCount = winnersCount ? Math.ceil(winnersCount / PAGE_SIZE) : 0;

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["winners", page - 1],
      queryFn: () => getWinners({ page: page - 1 }),
    });
  }

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["winners", page + 1],
      queryFn: () => getWinners({ page: page + 1 }),
    });
  }

  return { error, isLoading, winners };
};

export default useWinners;
