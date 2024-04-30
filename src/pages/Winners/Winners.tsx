import useTotalWinners from "@hooks/useTotalWinners";

import Pagination from "@ui/Pagination/Pagination";
import WinnersTable from "@ui/WinnersTable/WinnersTable";

import styles from "./Winners.module.css";

function Winners() {
  const { winnersCount } = useTotalWinners();

  return (
    <section className={styles.winners}>
      <Pagination count={winnersCount} />
      <WinnersTable />
    </section>
  );
}

export default Winners;
