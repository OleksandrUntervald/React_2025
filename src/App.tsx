
import './App.css'
import {useState} from "react";



function App() {
    let [counter, setCounter] = useState<number>(0);

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={() => {
                setCounter((value) => {
                    return  value + 1
                })
            }}>Increment</button>

            <button onClick={() => {
                setCounter((value) => {
                    return value - 1
                })
            }}>Decrement</button>
        </div>
    )
}

export default App