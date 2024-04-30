import { createCar } from "@services/apiGarage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useCreateCar = () => {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createNewCar } = useMutation({
    mutationFn: createCar,
    onSuccess: (data) => {
      queryClient.invalidateQueries();

      toast.success(`Car ${data.name} created!`);
    },

    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createNewCar };
};

export default useCreateCar;
