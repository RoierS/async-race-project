import {
  createContext,
  MutableRefObject,
  ReactNode,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

interface IRaceContext {
  isRace: boolean;
  setIsRace: React.Dispatch<React.SetStateAction<boolean>>;
  carRefs: MutableRefObject<
    Record<string, MutableRefObject<HTMLImageElement | null>>
  >;
  flagRefObj: MutableRefObject<
    Record<string, MutableRefObject<HTMLImageElement | null>>
  >;
}

export const RaceContext = createContext<IRaceContext | null>(null);

function RaceProvider({ children }: { children: ReactNode }) {
  const [isRace, setIsRace] = useState(false);
  const carRefs = useRef<
    Record<string, MutableRefObject<HTMLImageElement | null>>
  >({});

  const flagRefObj = useRef<
    Record<string, MutableRefObject<HTMLImageElement | null>>
  >({});

  const value = useMemo(
    () => ({
      carRefs,
      flagRefObj,
      isRace,
      setIsRace,
    }),
    [isRace],
  );

  return <RaceContext.Provider value={value}>{children}</RaceContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useRace() {
  const context = useContext(RaceContext);
  if (!context) {
    throw new Error("useRace must be used within a RaceProvider");
  }
  return context;
}

export default RaceProvider;
