import { Car } from "@interfaces/Car";
import {
  createWinner,
  getAllWinners,
  updateWinner,
} from "@services/apiWinners";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useCreateWinner = () => {
  const queryClient = useQueryClient();

  const { mutate: createUpdateWinner, isPending: isCreating } = useMutation({
    mutationFn: async (winnerData: Car) => {
      const winners = await getAllWinners();
      const existingWinner = winners.find(
        (winner) => winner.id === winnerData.id,
      );

      if (existingWinner && existingWinner.wins) {
        const updatedWinner = {
          ...existingWinner,
          wins: (existingWinner.wins || 1) + 1,
          time: Math.min(existingWinner.time!, winnerData.time!),
        };

        await updateWinner(existingWinner.id, updatedWinner);
        toast.success(`${updatedWinner.name} wins!`);
      } else {
        await createWinner(winnerData);
        toast.success(`${winnerData.name} wins!`);
      }

      queryClient.invalidateQueries({
        queryKey: ["winners"],
      });
    },
    onError: (err) => toast.error(err.message || "Something went wrong"),
  });

  return { createUpdateWinner, isCreating };
};

export default useCreateWinner;
