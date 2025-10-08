import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostPage} from "../pages/PostPage.tsx";



export const routes = createBrowserRouter([
    {
        path: '/',element:<MainLayout/>, children: [
            {path: "users", element: <UsersPage/>},
            {path: "post", element: <PostPage/>}
        ]
    }
])