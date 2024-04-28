import { useState } from "react";

import { useSearchParams } from "react-router-dom";

import styles from "./TableHead.module.css";

function TableHead() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState(searchParams.get("sort"));
  const [order, setOrder] = useState(searchParams.get("order"));

  const handleSort = (sortName: string) => {
    const newOrder = sortName === sort && order === "asc" ? "desc" : "asc";
    setSearchParams({ order: newOrder, sort: sortName });
    setSort(sortName);
    setOrder(newOrder);
  };

  return (
    <thead className={styles.thead}>
      <tr className={styles.theadRaw}>
        <th className={styles.theadCell}>№</th>
        <th className={styles.theadCell}>Car</th>
        <th className={styles.theadCell}>Name</th>
        <th className={styles.theadCellSort} onClick={() => handleSort("wins")}>
          Wins
          {sort === "wins" && <span> {order === "asc" ? "⬆" : "⬇"}</span>}
        </th>
        <th className={styles.theadCellSort} onClick={() => handleSort("time")}>
          Time (s)
          {sort === "time" && <span> {order === "asc" ? "⬆" : "⬇"}</span>}
        </th>
      </tr>
    </thead>
  );
}

export default TableHead;
