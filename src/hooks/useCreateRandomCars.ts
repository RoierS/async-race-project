import { NUMS_OF_CARS } from "@constants/constants";
import generateRandomCarName from "@helpers/generateRandomCarName";
import generateRandomColor from "@helpers/generateRandomColor";
import { createCar } from "@services/apiGarage";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateRandomCars = () => {
  const queryClient = useQueryClient();

  const { mutate: createRandomCars, isPending } = useMutation({
    mutationFn: async () => {
      const carsPromises = Array.from({ length: NUMS_OF_CARS }, () =>
        createCar({
          name: generateRandomCarName(),
          color: generateRandomColor(),
          id: 0,
          time: 0,
          wins: 0,
        }),
      );

      await Promise.all(carsPromises);
      queryClient.invalidateQueries();
    },
  });

  return { createRandomCars, isPending };
};

export default useCreateRandomCars;
