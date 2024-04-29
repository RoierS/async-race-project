import {
  createContext,
  Dispatch,
  MutableRefObject,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
  useRef,
} from "react";

import { ActionTypes } from "@constants/constants";
import { Car } from "@interfaces/Car";

interface IAppContextProps {
  selectedCar: Car | null;
  garagePage: number;
  winnersPage: number;
  isRace: boolean;
  isSingleRace: boolean;
}

type ViewType = "garagePage" | "winnersPage";

type AppAction =
  | { type: ActionTypes.SET_PAGE; view: ViewType; page: number }
  | { type: ActionTypes.SELECT_CAR; payload: Car }
  | { type: ActionTypes.IS_RACE; payload: boolean }
  | { type: ActionTypes.IS_SINGLE_RACE; payload: boolean };

const appReducer = (state: IAppContextProps, action: AppAction) => {
  switch (action.type) {
    case ActionTypes.SELECT_CAR:
      return { ...state, selectedCar: action.payload };

    case ActionTypes.SET_PAGE:
      return {
        ...state,
        [action.view]: action.page,
      };

    case ActionTypes.IS_RACE:
      return { ...state, isRace: action.payload };

    case ActionTypes.IS_SINGLE_RACE:
      return { ...state, isSingleRace: action.payload };

    default:
      return state;
  }
};

interface IAppContext {
  isRace: boolean;
  carRefs: MutableRefObject<
    Record<string, MutableRefObject<HTMLImageElement | null>>
  >;
  flagRefObj: MutableRefObject<
    Record<string, MutableRefObject<HTMLImageElement | null>>
  >;
  dispatch: Dispatch<AppAction>;
  isSingleRace: boolean;
  selectedCar: Car | null;
  garagePage: number;
  winnersPage: number;
}

export const AppContext = createContext<IAppContext | null>(null);

const initialState = {
  isRace: false,
  isSingleRace: false,
  selectedCar: null,
  garagePage: 1,
  winnersPage: 1,
};

function AppProvider({ children }: { children: ReactNode }) {
  const [
    { isRace, isSingleRace, selectedCar, garagePage, winnersPage },
    dispatch,
  ] = useReducer(appReducer, initialState);

  const carRefs = useRef<
    Record<string, MutableRefObject<HTMLImageElement | null>>
  >({});

  const flagRefObj = useRef<
    Record<string, MutableRefObject<HTMLImageElement | null>>
  >({});

  const value = useMemo(
    () => ({
      isRace,
      isSingleRace,
      selectedCar,
      garagePage,
      winnersPage,
      dispatch,
      carRefs,
      flagRefObj,
    }),
    [garagePage, isRace, isSingleRace, selectedCar, winnersPage],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useRace() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useRace must be used within a RaceProvider");
  }
  return context;
}

export default AppProvider;
