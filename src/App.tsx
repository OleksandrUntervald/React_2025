
import './App.css'
import NewComponets from "./components/NewComponets.tsx";

function App() {
    return (
        <div>
             <NewComponets  title={'Title 1'}>
                 'Text 1'
             </NewComponets>
            <NewComponets title={'Title 2'}>

            </NewComponets>
            <NewComponets title={'Title 3'}>
                'Text 4'
            </NewComponets>
        </div>
    )
}

export default App