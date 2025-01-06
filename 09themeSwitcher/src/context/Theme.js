import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode : 'light',
  lightTheme : () => {},
  darkTheme: () => {},
})

// now we don't have to write themeprovider.proviser everytime
export const ThemeProvider = ThemeContext.Provider;


// make our hooks present globally
export default function useTheme() {
  return useContext(ThemeContext)
}