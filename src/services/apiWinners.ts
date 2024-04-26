import { Car } from "@interfaces/Car";

import request from "./apiRequest";

export default async function getWinners(
  page: number,
  limit: number,
): Promise<Car[]> {
  const data: Car[] = await request(`/winners?_page=${page}&_limit=${limit}`);
  return data;
}
