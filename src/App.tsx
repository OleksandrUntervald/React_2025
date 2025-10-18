import LeftBranch from "./Components/LeftBranch.tsx";
import RightBranch from "./Components/RightBranch.tsx";
import {init, MyContext} from "./context/MyContext.tsx";
import {useState} from "react";

const App = () => {
    const [counter, setCounter] = useState<number>(init.counterValue)

   return (
       <div>
           <MyContext.Provider value={{
                   counterValue: counter,
                   increment: (obj) => {
                       setCounter(++obj)
                   }
           }}>
               <LeftBranch/>
               <RightBranch/>
           </MyContext.Provider>

       </div>

  )
}

export default App