import {createContext} from "react";

type ContexValueType = {
    theme: string,
    changeTheme: (theme: string) => void
}
const defaultValue: ContexValueType = {
    theme: 'light',
    changeTheme: (theme: string) => {
        console.log(theme);
    }
}

export const MyContexProvider = createContext<ContexValueType>(defaultValue);