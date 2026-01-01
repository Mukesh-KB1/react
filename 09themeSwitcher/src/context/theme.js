import { useContext,createContext } from "react";

export const themeContext = createContext({
    theme : "light",
    darkMode : ()=>{},
    lightMode : ()=>{}
});

export const themeContextProvider = themeContext.Provider;

export const useTheme = ()=>{
    return useContext(themeContext)
}