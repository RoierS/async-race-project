import { Car } from "@interfaces/Car";
import CarImageWrapper from "@ui/CarImageWrapper/CarImageWrapper";

import styles from "./TableRow.module.css";

function TableRow({
  winner: { id, name, wins, time, color },
}: {
  winner: Car;
}) {
  return (
    <tr className={styles.row}>
      <td className={styles.cell}>{id}</td>
      <td className={styles.cell}>
        <CarImageWrapper color={color} aria-label={name} />
      </td>
      <td className={styles.cell}>{name}</td>
      <td className={styles.cell}>{wins}</td>
      <td className={styles.cell}>{time}</td>
    </tr>
  );
}

export default TableRow;
