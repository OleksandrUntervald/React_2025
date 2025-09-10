
import './App.css'
import {PostComponents} from "./component/PostComponents/PostComponents.tsx";
import {TodoComponents} from "./component/TodoComponents/TodoComponents.tsx";




const App = () => {
   return (<div className='flex'>
       <TodoComponents />
       <PostComponents />
   </div>)
}

export default App