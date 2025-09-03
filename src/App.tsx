
import './App.css'


const coursesTitleArray: string[] = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];

function App() {
    return (
        <div className='bg-gray-100'>
            {coursesTitleArray.map((course, index) =>
                <div key={index} className='text-red-500'>
                    {index + 1}) name of course: {course};
                </div>
                    )}
        </div>
    )
}

export default App