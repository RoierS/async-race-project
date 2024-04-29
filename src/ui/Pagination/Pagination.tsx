/* eslint-disable max-lines-per-function */

import { PAGE_SIZE } from "@constants/constants";
import Button from "@ui/Button/Button";

import { useLocation, useSearchParams } from "react-router-dom";

import styles from "./Pagination.module.css";

function Pagination({ count }: { count: number }) {
  const [searchParams, setSearchParams] = useSearchParams({});
  const currentPage = Number(searchParams.get("page")) || 1;
  const location = useLocation();
  const isGarageView = location.pathname === "/garage";

  const handleNext = () => {
    const nextPage =
      currentPage === Math.ceil(count / PAGE_SIZE)
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
  return (
    <div className={styles.pagination}>
      <Button onClick={handlePrev} disabled={currentPage === 1}>
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
        onClick={handleNext}
        disabled={currentPage >= Math.ceil(count / PAGE_SIZE)}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;
