import { BASE_URL, HttpMethod } from "@constants/constants";
import { Car } from "@interfaces/Car";

import request from "./apiRequest";

export async function getAllWinners() {
  const data: Car[] = await request(`/winners`);
  return data;
}

export async function getWinnersOnPage(page: number, limit: number) {
  const data: Car[] = await request(`/winners?_page=${page}&_limit=${limit}`);
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
