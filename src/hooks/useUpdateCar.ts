import { Car } from "@interfaces/Car";
import { updateCar } from "@services/apiGarage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useUpdateCar = () => {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: updateExistingCar } = useMutation({
    mutationFn: ({ carId, car }: { carId: number; car: Car }) =>
      updateCar(carId, car),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });

      toast.success("Car updated successfully");
    },

    onError: () => toast.error("Something went wrong"),
  });

  return { updateExistingCar, isUpdating };
};

export default useUpdateCar;
