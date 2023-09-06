import { createContext } from "react";

export const AppContextObject = {
    playMusic: (newSrc: string) => {},
    playSFX: (newSrc: string) => {}
}
export const AppContext = createContext(AppContextObject);