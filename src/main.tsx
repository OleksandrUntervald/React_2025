import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainLayouts} from "./layouts/MainLayouts.tsx";
import {APage} from "./pages/APage.tsx";
import {BPage} from "./pages/BPage.tsx";


const router = createBrowserRouter([
    {path: '/', element: <MainLayouts/>,
        children:
        [
            {path: 'a', element: <APage/>},
            {path: 'b', element: <BPage/>}
        ]
    }
])

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>)

