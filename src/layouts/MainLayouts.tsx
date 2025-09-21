import {Menu} from "../component/menu/Menu.tsx";
import {Outlet} from "react-router-dom";

export  const  MainLayouts = () => {
    return (
        <div>
            <Menu/>
            <hr/>
            <Outlet/>
        </div>
    )
}