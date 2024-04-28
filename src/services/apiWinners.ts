import { BASE_URL, HttpMethod, WINNERS_PAGE_SIZE } from "@constants/constants";
import { Car } from "@interfaces/Car";

import { SortBy, Order } from "@interfaces/types";

import request from "./apiRequest";

export async function getAllWinners() {
  const data: Car[] = await request(`/winners`);
  return data;
}

interface WinnersProps {
  page: number;
  limit?: number;
  sort?: SortBy;
  order?: Order;
}

export async function getWinners({
  page,
  limit = WINNERS_PAGE_SIZE,
  sort = "wins",
  order = "DESC",
}: WinnersProps) {
  const data: Car[] = await request(
    `/winners?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`,
  );
  return data;
}

export async function getWinner(id: number) {
  const data: Car = await request(`/winners/${id}`, HttpMethod.GET);
  return data;
}

export async function createWinner(newWinner: Car) {
  const data: Car = await request(`/winners`, HttpMethod.POST, newWinner);
  return data;
}

export async function updateWinner(
  id: number,
  winnerData: { wins: number; time: number },
): Promise<Car> {
  const data: Car = await request(
    `/winners/${id}`,
    HttpMethod.PATCH,
    winnerData,
  );

  return data;
}

export async function getTotalWinnersCount() {
  const response = await fetch(`${BASE_URL}/winners?_limit=1`);
  const totalCountHeader = response.headers.get("X-Total-Count");
  return totalCountHeader ? parseInt(totalCountHeader, 10) : 0;
}
