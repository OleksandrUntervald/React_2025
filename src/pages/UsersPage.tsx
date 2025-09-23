import {UsersComponents} from "../components/UsersComponents.tsx";
import {Outlet} from "react-router-dom";


export const UsersPage = () => {
    return (
        <div>
            <UsersComponents/>
            <Outlet/>
        </div>
    )
}
