export const BASE_URL = "http://127.0.0.1:3000";

export const DIST = 45;

export const FAILED = -1;

export const NUMS_OF_CARS = 100;

export const PAGE_SIZE = 7;

export const WINNERS_PAGE_SIZE = 10;

export enum ActionTypes {
  SELECT_CAR,
  SET_PAGE,
  IS_RACE,
  IS_SINGLE_RACE,
}

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export const defaultCarColor = "#000000";

export const carBrands = [
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Volkswagen",
  "Nissan",
  "Hyundai",
  "Kia",
  "Volvo",
  "Mazda",
  "Subaru",
  "Lexus",
  "Jeep",
  "Tesla",
  "Ferrari",
  "Porsche",
  "Maserati",
];

export const carModels = [
  "Camry",
  "Civic",
  "Mustang",
  "Corvette",
  "3 Series",
  "E-Class",
  "A4",
  "Golf",
  "Altima",
  "Elantra",
  "Optima",
  "XC90",
  "CX-5",
  "Forester",
  "RX 350",
  "Wrangler",
  "Model S",
  "458 Italia",
  "911 Carrera",
  "GranTurismo",
];
