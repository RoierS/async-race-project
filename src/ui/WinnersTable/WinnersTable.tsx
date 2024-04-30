import { Car } from "@interfaces/Car";

import TableBody from "@ui/TableBody/TableBody";
import TableHead from "@ui/TableHead/TableHead";
import TableRow from "@ui/TableRow/TableRow";

import styles from "./WinnersTable.module.css";

function WinnersTable() {
  return (
    <div className={styles.winnersTableContainer}>
      <table className={styles.winnersTable}>
        <TableHead />

        <TableBody
          render={(winner: Car) => <TableRow winner={winner} key={winner.id} />}
        />
      </table>
    </div>
  );
}

export default WinnersTable;
