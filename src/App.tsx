import {useEffect} from "react";
import {getAllUsers} from "./services/user.service.ts";


const App = () => {
    useEffect(() => {
        getAllUsers().then(value => console.log(value));
    }, []);
   return (
       <div>asd
       </div>

  )
}

export default App