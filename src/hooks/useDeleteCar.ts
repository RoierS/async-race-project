import { ActionTypes, PAGE_SIZE } from "@constants/constants";
import { useRace } from "@context/AppContext";
import { deleteCar, getCars, getTotalCarCount } from "@services/apiGarage";
import { deleteWinner, getAllWinners } from "@services/apiWinners";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useLocation, useSearchParams } from "react-router-dom";

// eslint-disable-next-line max-lines-per-function
const useDeleteCar = (id: number) => {
  const queryClient = useQueryClient();
  const { dispatch } = useRace();
  const location = useLocation();
  const isGarageView = location.pathname === "/garage";
  const currentView = isGarageView ? "garagePage" : "winnersPage";
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
        dispatch({
          type: ActionTypes.SET_PAGE,
          view: currentView,
          page: currentPage - 1,
        });
        queryClient.invalidateQueries({
          queryKey: ["cars", carsCount],
        });
        queryClient.prefetchQuery({
          queryKey: ["cars", currentPage - 1],
          queryFn: () => getCars({ page: currentPage - 1 }),
        });
      }
      const winners = await getAllWinners();
      const isWinnerInTable = winners?.some((w) => w.id === id);
      if (isWinnerInTable) {
        await deleteWinner(id);
        queryClient.invalidateQueries();
      }
      toast.success("Car deleted");
    },
    onError: (err) => toast.error(err.message || "Error deleting car"),
  });
  return { isDeleting, deleteExistingCar };
};

export default useDeleteCar;
