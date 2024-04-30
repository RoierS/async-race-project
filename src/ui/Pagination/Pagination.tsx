import { PAGE_SIZE, WINNERS_PAGE_SIZE } from "@constants/constants";
import usePagination from "@hooks/usePagination";
import Button from "@ui/Button/Button";

import { useLocation, useSearchParams } from "react-router-dom";

import styles from "./Pagination.module.css";

function Pagination({ count }: { count: number }) {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const isGarageView = location.pathname === "/garage";

  const { handleNext, handlePrev } = usePagination(count);

  return (
    <div className={styles.pagination}>
      <Button onClick={() => handlePrev()} disabled={currentPage === 1}>
        Prev
      </Button>
      <p className={styles.pageNumber}>
        Page: <span className={styles.currentNumber}>#{currentPage}</span>
      </p>
      <p className={styles.carsCount}>
        {isGarageView ? "Garage" : "Winners"}:{" "}
        <span className={styles.currentNumber}> {count}</span>
      </p>
      <Button
        onClick={() => handleNext()}
        disabled={
          currentPage >=
          Math.ceil(count / (isGarageView ? PAGE_SIZE : WINNERS_PAGE_SIZE))
        }
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;
