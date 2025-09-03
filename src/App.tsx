
import './App.css'
import coursesAndDurationArray from "./data/coursesList.ts";
import MyCourses from "./components/MyCourses.tsx";

function App() {
    return (
        <div>
            { coursesAndDurationArray.map((course, id) =>  <MyCourses key={id} course={course}/> )
            }

        </div>
    )
}

export default App