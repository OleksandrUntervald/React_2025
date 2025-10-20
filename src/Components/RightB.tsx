import {useContext} from "react";
import {MyContexProvider} from "../contex/MyContexProvider.tsx";
import './../../AA.css';

export const RightB = () => {
    const {theme} = useContext(MyContexProvider)
    return (
        <div>
            <div className={theme}>
                this is component RightB, and thene value is - {theme}
            </div>


        </div>
    )
}