import { PAGE_SIZE } from "@constants/constants";
import { deleteCar, getCars, getTotalCarCount } from "@services/apiGarage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

const useDeleteCabin = () => {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  const { isPending: isDeleting, mutate: deleteExistingCar } = useMutation({
    mutationFn: deleteCar,
    onSuccess: async () => {
      queryClient.invalidateQueries();

      const currentPage = Number(searchParams.get("page")) || 1;
      const carsCount = await queryClient.fetchQuery({
        queryKey: ["cars-count"],
        queryFn: getTotalCarCount,
      });

      if (
        carsCount &&
        Math.ceil(carsCount / PAGE_SIZE) < currentPage &&
        currentPage > 1
      ) {
        searchParams.set("page", String(currentPage - 1));
        setSearchParams(searchParams);

        queryClient.invalidateQueries({
          queryKey: ["cars", carsCount],
        });

        queryClient.prefetchQuery({
          queryKey: ["cars", currentPage - 1],
          queryFn: () => getCars({ page: currentPage - 1 }),
        });
      }

      toast.success("Car deleted");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteExistingCar };
};

export default useDeleteCabin;
