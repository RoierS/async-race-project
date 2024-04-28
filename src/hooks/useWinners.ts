import { PAGE_SIZE } from "@constants/constants";
import { Order, SortBy } from "@interfaces/types";
import { getWinners } from "@services/apiWinners";
import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import useTotalWinners from "./useTotalWinners";

const useWinners = () => {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const { winnersCount = 0 } = useTotalWinners();

  const page = Number(searchParams.get("page")) || 1;
  const sort = searchParams.get("sort") as SortBy;
  const order = searchParams.get("order") as Order;

  const {
    isLoading,
    data: winners,
    error,
  } = useQuery({
    queryKey: ["winners", page, sort, order],
    queryFn: () => getWinners({ page, sort, order }),
    placeholderData: keepPreviousData,
  });

  const pageCount = winnersCount ? Math.ceil(winnersCount / PAGE_SIZE) : 0;

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["winners", page - 1],
      queryFn: () => getWinners({ page: page - 1, sort, order }),
    });
  }

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["winners", page + 1],
      queryFn: () => getWinners({ page: page + 1, sort, order }),
    });
  }

  return { error, isLoading, winners };
};

export default useWinners;
