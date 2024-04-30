import {
  ActionTypes,
  PAGE_SIZE,
  WINNERS_PAGE_SIZE,
} from "@constants/constants";
import { useRace } from "@context/AppContext";
import { useLocation, useSearchParams } from "react-router-dom";

const usePagination = (count: number) => {
  const { dispatch } = useRace();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const isGarageView = location.pathname === "/garage";
  const view = isGarageView ? "garagePage" : "winnersPage";

  const setPage = (page: number) => {
    setSearchParams({ page: page.toString() });
    dispatch({
      type: ActionTypes.SET_PAGE,
      view,
      page,
    });
  };
  const handleNext = () => {
    const nextPage =
      currentPage ===
      Math.ceil(count / (isGarageView ? PAGE_SIZE : WINNERS_PAGE_SIZE))
        ? currentPage
        : currentPage + 1;
    setPage(nextPage);
  };

  const handlePrev = () => {
    const prevPage = currentPage === 1 ? currentPage : currentPage - 1;
    setPage(prevPage);
  };

  return { handleNext, handlePrev, currentPage };
};

export default usePagination;
