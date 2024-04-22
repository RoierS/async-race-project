import { HttpMethod, BASE_URL } from "@constants/constants";

const ErorrCodes = {
  TOO_MANY_REQUESTS_ERROR_CODE: 429,
  BROKEN_ENGINE_ERROR_CODE: 500,
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
      "X-Total-Count": "4",
    },
    signal,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }
  const response = await fetch(`${BASE_URL}${url}`, options);

  if (!response.ok) {
    if (response.status === ErorrCodes.TOO_MANY_REQUESTS_ERROR_CODE) {
      throw new Error("Too many requests. Please try again later.");
    } else if (response.status === ErorrCodes.BROKEN_ENGINE_ERROR_CODE) {
      throw new Error(
        "Car has been stopped suddenly. It's engine was broken down.",
      );
    } else {
      throw new Error(`Request failed. Status: ${response.status}`);
    }
  }

  const data: T = await response.json();
  return data;
}
