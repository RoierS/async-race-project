import { Car } from "@interfaces/Car";

import { request } from "./apiRequest";

const CARS_PER_PAGE = 7;

// eslint-disable-next-line import/prefer-default-export
export async function getCars(page = 1, limit = CARS_PER_PAGE): Promise<Car[]> {
  const data: Car[] = await request(`/garage?_page=${page}&_limit=${limit}`);
  return data;
}
