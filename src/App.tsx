import {LeftA} from "./Components/LeftA.tsx";
import {MyContexProvider} from "./contex/MyContexProvider.tsx";
import {useState} from "react";
import {RightA} from "./Components/RightA.tsx";


const App = () => {
    const [themeColor, setThemeColor] = useState<string>('light');
   return (
       <div>
           <MyContexProvider.Provider value={{
               theme: themeColor,
               changeTheme: (themeValue: string) =>
                   {
                       setThemeColor(themeValue);
                   }
           }}>
           <LeftA/>
           <RightA/>
           </MyContexProvider.Provider>
       </div>

  )
}

export default App