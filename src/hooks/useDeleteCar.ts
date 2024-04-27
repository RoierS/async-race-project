import { deleteCar } from "@services/apiGarage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useDeleteCabin = () => {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteExistingCar } = useMutation({
    mutationFn: deleteCar,
    onSuccess: () => {
      queryClient.invalidateQueries();

      toast.success("Car deleted");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteExistingCar };
};

export default useDeleteCabin;
