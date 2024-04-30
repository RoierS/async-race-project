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

import { ActionTypes, defaultCarColor } from "@constants/constants";
import { Car } from "@interfaces/Car";

interface IAppContextProps {
  selectedCar: Car | null;
  garagePage: number;
  winnersPage: number;
  isRace: boolean;
  isSingleRace: boolean;
  createCarInputState: {
    name: string;
    color: string;
  };
  editCarInputState: {
    name: string;
    color: string;
  };
}

interface IUpdateCreateInput {
  field: string;
  value: string;
}

type ViewType = "garagePage" | "winnersPage";

type AppAction =
  | { type: ActionTypes.SET_PAGE; view: ViewType; page: number }
  | { type: ActionTypes.SELECT_CAR; payload: Car | null }
  | { type: ActionTypes.IS_RACE; payload: boolean }
  | { type: ActionTypes.IS_SINGLE_RACE; payload: boolean }
  | { type: ActionTypes.UPDATE_CREATE_INPUT; payload: IUpdateCreateInput }
  | { type: ActionTypes.UPDATE_EDIT_INPUT; payload: IUpdateCreateInput };

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

    case ActionTypes.UPDATE_CREATE_INPUT:
      return {
        ...state,
        createCarInputState: {
          ...state.createCarInputState,
          [action.payload.field]: action.payload.value,
        },
      };

    case ActionTypes.UPDATE_EDIT_INPUT:
      return {
        ...state,
        editCarInputState: {
          ...state.editCarInputState,
          [action.payload.field]: action.payload.value,
        },
      };

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
  createCarInputState: {
    name: string;
    color: string;
  };
  editCarInputState: {
    name: string;
    color: string;
  };
}

export const AppContext = createContext<IAppContext | null>(null);

const initialState = {
  isRace: false,
  isSingleRace: false,
  selectedCar: null,
  garagePage: 1,
  winnersPage: 1,
  createCarInputState: {
    name: "",
    color: defaultCarColor,
  },
  editCarInputState: {
    name: "",
    color: defaultCarColor,
  },
};

// eslint-disable-next-line max-lines-per-function
function AppProvider({ children }: { children: ReactNode }) {
  const [
    {
      isRace,
      isSingleRace,
      selectedCar,
      garagePage,
      winnersPage,
      editCarInputState,
      createCarInputState,
    },
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
      editCarInputState,
      createCarInputState,
    }),
    [
      createCarInputState,
      editCarInputState,
      garagePage,
      isRace,
      isSingleRace,
      selectedCar,
      winnersPage,
    ],
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
