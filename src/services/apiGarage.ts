import { Car } from "@interfaces/Car";

import { BASE_URL, HttpMethod, request } from "./apiRequest";

const CARS_PER_PAGE = 7;

export async function getCars(page = 1, limit = CARS_PER_PAGE): Promise<Car[]> {
  const data: Car[] = await request(`/garage?_page=${page}&_limit=${limit}`);
  return data;
}

export async function getCar(carId: number): Promise<Car> {
  const data: Car = await request(`/garage/${carId}`);
  return data;
}

export async function createCar(car: Car): Promise<Car> {
  const data: Car = await request(`/garage`, HttpMethod.POST, car);
  return data;
}

export async function getTotalCarCount(): Promise<number> {
  try {
    const response = await fetch(`${BASE_URL}/garage?_limit=1`);
    if (!response.ok) {
      throw new Error(`Request failed. Status: ${response.status}`);
    }

    const totalCountHeader = response.headers.get("X-Total-Count");
    const totalCount = totalCountHeader ? parseInt(totalCountHeader, 10) : 0;

    return totalCount;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to get total car count:", error);
    throw error;
  }
}
