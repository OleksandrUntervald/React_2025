import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {CreateCarsPage} from "../components/pages/CreateCarsPage.tsx";


const routes = createBrowserRouter([
    {
        path: "/",element: <App/>, children: [
            {path:'cars', element: <CarsPage/>},
            {path:'cars/create', element: <CreateCarsPage/>}
        ]
    }
])