import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";

export const routes = createBrowserRouter([
    {
        path: '/',element:<App/>,children:[
            {path:'users/jsonplaceholder', element: <div>users placeholder</div>},
            {path:'users/dummyjson', element: <div>users dummy</div>},
            {path:'posts/jsonplaceholder', element: <div>posts placeholder</div>},
            {path:'posts/dummyjson', element: <div>posts dummyjson</div>},
            {path:'comments/jsonplaceholder', element: <div>comments jsonplaceholder</div>}

        ]
    }
])