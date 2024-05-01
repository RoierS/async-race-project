import { ReactNode } from "react";

import useCars from "@hooks/useCars";
import { Car } from "@interfaces/Car";

function CarList({ render }: { render: (car: Car) => ReactNode }) {
  const { cars } = useCars();

  return <div>{cars?.map(render)}</div>;
}

export default CarList;
