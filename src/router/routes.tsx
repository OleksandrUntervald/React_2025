import {createBrowserRouter} from "react-router-dom"; 
import {UsersPage} from "../pages/UsersPage.tsx";
import MainLayout from "../MainLayout.tsx";

export const routes = createBrowserRouter([{
    path:'/', element: <MainLayout/>, children: [
        {path: 'users', element: <UsersPage/>}
    ]
}])