import { createCar } from "@services/apiGarage";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateCar = () => {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createNewCar } = useMutation({
    mutationFn: createCar,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });
    },
  });

  return { isCreating, createNewCar };
};

export default useCreateCar;
