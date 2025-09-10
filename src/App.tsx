
import './App.css'
import {CommentComponents} from "./component/CommentComponents/CommentComponents.tsx";
import {PostComponents} from "./component/PostComponents/PostComponents.tsx";
import {TodoComponents} from "./component/TodoComponents/TodoComponents.tsx";




const App = () => {
   return (<div className='flex'>
       <TodoComponents />
       <PostComponents />
      <CommentComponents/>
   </div>)
}

export default App