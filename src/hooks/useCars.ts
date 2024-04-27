import { PAGE_SIZE } from "@constants/constants";
import { getCars } from "@services/apiGarage";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import useTotalCars from "./useTotalCars";

const useCars = () => {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const { carsCount = 0 } = useTotalCars();

  const page = Number(searchParams.get("page")) || 1;

  const {
    isLoading,
    data: cars,
    error,
  } = useQuery({
    queryKey: ["cars", page],
    queryFn: () => getCars({ page }),
  });

  const pageCount = carsCount ? Math.ceil(carsCount / PAGE_SIZE) : 0;

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["cars", page - 1],
      queryFn: () => getCars({ page: page - 1 }),
    });
  }

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["cars", page + 1],
      queryFn: () => getCars({ page: page + 1 }),
    });
  }

  return { error, isLoading, cars };
};

export default useCars;
