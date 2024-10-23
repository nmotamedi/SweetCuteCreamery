import { createContext } from "react";
import { Flavors } from "../data";

export type AppContextValues = {
  selectedFlavor: Flavors | undefined;
  handleSetFlavor: (flavorId: number) => void;
};

export const AppContext = createContext<AppContextValues>({
  selectedFlavor: undefined,
  handleSetFlavor: () => undefined,
});

export const FlavorProvider = AppContext.Provider;
