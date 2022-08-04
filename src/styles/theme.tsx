import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global";

type PalletMode = keyof typeof palletes;

interface ThemeProviderData {
  currentTheme: PalletMode;
  setCurrentTheme: Dispatch<SetStateAction<"light" | "dark">>;
  getOppositTheme: () => PalletMode;
}

interface Props {
  children: ReactNode;
}

export type Theme = {
  bgOne: string;
  bgTwo: string;
  link: string;
  text: string;
  highlight: string;
  success: string;
  info: string;
  error: string;
  warning: string;
};

const lightPallete: Theme = {
  bgOne: "#f4f4f4",
  bgTwo: "#d5d5d5",
  link: "#000",
  text: "#575757",
  highlight: "#5a36eb",
  success: "#c8d379",
  info: "#91cdf2",
  error: "#d26d80",
  warning: "#fcb71f",
};

const darkPallete: Theme = {
  bgOne: "#000",
  bgTwo: "#2b2b2b",
  link: "#f4f4f4",
  text: "#c6c6c6",
  highlight: "#5a36eb",
  success: "#c8d379",
  info: "#91cdf2",
  error: "#d26d80",
  warning: "#fcb71f",
};

export const palletes = {
  light: lightPallete,
  dark: darkPallete,
};

export const ThemeContext = createContext({} as ThemeProviderData);

export default function AppTheme({ children }: Props) {
  const [currentTheme, setCurrentTheme] = useState<PalletMode>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("@hbler:palleteMode") || "dark";
    setCurrentTheme(savedTheme as PalletMode);
  }, []);

  const getOppositTheme = useCallback(() => {
    if (currentTheme === "light") {
      localStorage.setItem("@hbler:palleteMode", "light");
      return "dark" as PalletMode;
    } else {
      localStorage.setItem("@hbler:palleteMode", "dark");
      return "light" as PalletMode;
    }
  }, [currentTheme]);

  return (
    <ThemeProvider theme={palletes[currentTheme]}>
      <ThemeContext.Provider
        value={{ currentTheme, setCurrentTheme, getOppositTheme }}
      >
        <GlobalStyle />
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
