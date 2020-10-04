import React, {
  useState,
  useEffect,
  createContext,
  useCallback,
  ReactNode,
} from "react";

interface ChildrenProps<RN> {
  children: RN;
}
interface WidthProps<T> {
  readonly width: T;
}

export const LandingContext = createContext<WidthProps<number>>({
  width: window.innerWidth,
});

export default function LandingProvider({
  children,
}: ChildrenProps<ReactNode>): JSX.Element {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowState = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowState);

    return () => window.removeEventListener("resize", handleWindowState);
  }, [handleWindowState]);

  const state = { width };
  Object.freeze(state);

  return (
    <LandingContext.Provider value={state}>{children}</LandingContext.Provider>
  );
}
