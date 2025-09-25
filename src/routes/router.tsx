import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";

export const routes = createBrowserRouter([
    {
        path: '/',element:<App/>,children:[
            {path:'users', element: <div>users</div>},
            {path:'posts', element: <div>posts</div>},
            {path:'comments', element: <div>comments</div>},
            {path:'products', element: <div>products</div>}

        ]
    }
])