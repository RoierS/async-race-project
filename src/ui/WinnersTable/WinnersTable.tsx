import { Car } from "@interfaces/Car";

import TableBody from "@ui/TableBody/TableBody";
import TableRow from "@ui/TableRow/TableRow";

import styles from "./WinnersTable.module.css";

function WinnersTable() {
  return (
    <table className={styles.winnersTable}>
      <thead>
        <tr>
          <th>№</th>
          <th>Car Image</th>
          <th>Name</th>
          <th>Wins</th>
          <th>Best time (s)</th>
        </tr>
      </thead>

      <TableBody
        render={(winner: Car) => <TableRow winner={winner} key={winner.id} />}
      />
    </table>
  );
}

export default WinnersTable;
