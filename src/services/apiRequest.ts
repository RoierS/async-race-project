import { HttpMethod, BASE_URL } from "@constants/constants";

const GarageErrorMassage = {
  400: `Wrong parameters: "id" should be any positive number, "status" should be "started", "stopped" or "drive`,
  404: `Engine parameters for car with such id was not found in the garage. Have you tried to set engine status to "started" before?`,
  429: "Drive already in progress. You can't run drive for the same car twice while it's not stopped.",
  500: "Car has been stopped suddenly. It's engine was broken down.",
};

export default async function request<T>(
  url: string,
  method: HttpMethod = HttpMethod.GET,
  body: object | null = null,
  signal: AbortSignal | null = null,
): Promise<T> {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    signal,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }
  const response = await fetch(`${BASE_URL}${url}`, options);

  if (!response.ok) {
    const { status } = response;
    const errorMessage =
      (GarageErrorMassage as Record<number, string>)[status] ||
      `Request failed. Status: ${status}`;
    throw new Error(errorMessage);
  }

  const data: T = await response.json();
  return data;
}
