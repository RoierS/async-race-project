import useTotalWinners from "@hooks/useTotalWinners";
import PageTitle from "@ui/PageTitle/PageTitle";

import Pagination from "@ui/Pagination/Pagination";

import styles from "./Winners.module.css";

function Winners() {
  const { winnersCount } = useTotalWinners();

  return (
    <section className={styles.winners}>
      <PageTitle title="Winners" />

      <Pagination count={winnersCount} />

      <div>Winners Table</div>
    </section>
  );
}

export default Winners;
