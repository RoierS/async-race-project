import { createCar } from "@services/apiGarage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useCreateCar = () => {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createNewCar } = useMutation({
    mutationFn: createCar,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });

      toast.success("New car created!");
    },

    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createNewCar };
};

export default useCreateCar;
