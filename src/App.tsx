import {Outlet} from "react-router-dom";
import {Menu} from "./components/menu/Menu.tsx";


const App = () => {
   return (<div className=''>
      <Menu/>
    <Outlet/>
   </div>)
}

export default App