import { createContext } from "react";

export const themes = {
    blue:{
        background: 'blue'
    },

    gray:{
        background:'gray'
    },

};


export const buttonTheme = createContext(themes.gray);
