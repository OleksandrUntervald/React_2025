import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersDummyComponent} from "../components/UsersDummy/UsersDummyComponent.tsx";
import { PostsPlaceholderComponents } from "../components/PostsPlaceholder/PostsPlaceholderComponents.tsx";
import {PostsDummyComponents} from "../components/PostsDummy/PostsDummyComponents.tsx";
import {CommentsPlaceholderComponent} from "../components/CommentsPlaceholder/CommentsPlaceholderComponent.tsx";
import { CommentsDummyComponent } from "../components/CommentsDummy/CommentsDummyComponent.tsx";
import {UsersPlaceholderComponent} from "../components/UsersPlaceholder/UsersPlaceholderComponent.tsx";

export const routes = createBrowserRouter([
    {
        path: '/',element:<App/>,children:[
            {path:'users/jsonplaceholder', element: <UsersPlaceholderComponent/> },
            {path:'users/dummyjson', element: <UsersDummyComponent/> },
            {path:'posts/jsonplaceholder', element: <PostsPlaceholderComponents/>},
            {path:'posts/dummyjson', element: <PostsDummyComponents/> },
            {path:'comments/jsonplaceholder', element:<CommentsPlaceholderComponent/> },
            {path:'comments/dummyjson', element: <CommentsDummyComponent/>}

        ]
    }
])