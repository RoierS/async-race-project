import { PAGE_SIZE } from "@constants/constants";
import useTotalCars from "@hooks/useTotalCars";
import Button from "@ui/Button/Button";

import { useSearchParams } from "react-router-dom";

import styles from "./Pagination.module.css";

function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const { carsCount = 0 } = useTotalCars();

  const handleNext = () => {
    const nextPage =
      currentPage === Math.ceil(carsCount / PAGE_SIZE)
        ? currentPage
        : currentPage + 1;
    searchParams.set("page", nextPage.toString());
    setSearchParams(searchParams);
  };

  const handlePrev = () => {
    const prevPage = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prevPage.toString());
    setSearchParams(searchParams);
  };
  if (carsCount <= PAGE_SIZE) return null;
  return (
    <div className={styles.pagination}>
      <Button onClick={handlePrev} disabled={currentPage === 1}>
        Prev
      </Button>
      <p className={styles.pageNumber}>
        Page: <span className={styles.currentNumber}>#{currentPage}</span>
      </p>
      <p className={styles.carsCount}>
        Garage: <span className={styles.currentNumber}>{carsCount}</span>
      </p>
      <Button
        onClick={handleNext}
        disabled={currentPage >= Math.ceil(carsCount / PAGE_SIZE)}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;
