import { HttpMethod } from "@constants/constants";
import { Car } from "@interfaces/Car";

import request from "./apiRequest";

export async function getWinners(page: number, limit: number) {
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
