import useTotalCars from "@hooks/useTotalCars";
import Button from "@ui/Button/Button";

import styles from "./Pagination.module.css";

function Pagination() {
  const { carsCount } = useTotalCars();

  const handleNextClick = () => {
    // TODO
  };

  const handlePrevClick = () => {
    // TODO
  };

  return (
    <div className={styles.pagination}>
      <Button type="button" onClick={handlePrevClick}>
        Prev
      </Button>
      <p className={styles.pageNumber}>
        Page: <span className={styles.currentNumber}> #1</span>
      </p>
      <p className={styles.carsCount}>
        Garage: <span className={styles.currentNumber}>{carsCount}</span>
      </p>
      <Button type="button" onClick={handleNextClick}>
        Next
      </Button>
    </div>
  );
}

export default Pagination;
