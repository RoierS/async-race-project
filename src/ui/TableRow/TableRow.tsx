import { Car } from "@interfaces/Car";
import CarImageWrapper from "@ui/CarImageWrapper/CarImageWrapper";

function TableRow({
  winner: { id, name, wins, time, color },
}: {
  winner: Car;
}) {
  return (
    <tr>
      <td>{id}</td>
      <td>
        <CarImageWrapper color={color} aria-label={name} />
      </td>
      <td>{name}</td>
      <td>{wins}</td>
      <td>{time}</td>
    </tr>
  );
}

export default TableRow;
