import { ReactNode } from "react";

import useWinners from "@hooks/useWinners";
import { Car } from "@interfaces/Car";

function TableBody({ render }: { render: (winner: Car) => ReactNode }) {
  const { winners } = useWinners();

  return <tbody>{winners?.map(render)}</tbody>;
}

export default TableBody;
