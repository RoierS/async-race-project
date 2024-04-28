import styles from "./TableHead.module.css";

function TableHead() {
  return (
    <thead className={styles.thead}>
      <tr className={styles.theadRaw}>
        <th className={styles.theadCell}>№</th>
        <th className={styles.theadCell}>Car</th>
        <th className={styles.theadCell}>Name</th>
        <th className={styles.theadCell}>Wins</th>
        <th className={styles.theadCell}>Best time (s)</th>
      </tr>
    </thead>
  );
}

export default TableHead;
