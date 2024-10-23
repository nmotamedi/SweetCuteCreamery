import { useContext } from "react";
import { AppContext, AppContextValues } from "./FlavorContext";

export function useFlavor(): AppContextValues {
  const values = useContext(AppContext);
  if (!values)
    throw new Error("useFlavors must be used inside a FlavorProvider");
  return values;
}
