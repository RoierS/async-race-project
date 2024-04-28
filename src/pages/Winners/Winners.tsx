import useTotalWinners from "@hooks/useTotalWinners";
import useWinners from "@hooks/useWinners";
import PageTitle from "@ui/PageTitle/PageTitle";

import Pagination from "@ui/Pagination/Pagination";

import styles from "./Winners.module.css";

function Winners() {
  const { winnersCount } = useTotalWinners();
  const { winners } = useWinners();

  // eslint-disable-next-line no-console
  console.log(winners);

  return (
    <section className={styles.winners}>
      <PageTitle title="Winners" />

      <Pagination count={winnersCount} />

      <div>Winners Table</div>

      {/* TODO add table */}
    </section>
  );
}

export default Winners;
