// theme-context.ts
// had to split Themeprovider into twofiles because fo react refresh. It orginally exported more than just a react component
import { createContext } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export type { Theme, ThemeProviderState };
