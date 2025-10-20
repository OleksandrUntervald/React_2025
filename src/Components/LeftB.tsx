import {useContext} from "react";
import {MyContexProvider} from "../contex/MyContexProvider.tsx";

export const LeftB = () => {
    const {changeTheme} = useContext(MyContexProvider);

    const handlerDark = () => {
        changeTheme('dark');
    }
    const handlerLight = () => {
        changeTheme('light');
    }
    return (
        <div>
            <button onClick={handlerDark}>change theme to dark</button>
            <button onClick={handlerLight}>change theme to light</button>
        </div>
    )
}