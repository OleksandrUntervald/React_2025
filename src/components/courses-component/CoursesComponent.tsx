
import coursesAndDurationArray from "../../data/courses.ts";
import CourseComponent from "../course-component/CourseComponent.tsx";




const CoursesComponent  = () => {
    return (
        <div className='flex flex-row items-center gap-4 bg-green-200'>
            {coursesAndDurationArray.map((course, index) => (
                <CourseComponent key={index} course={course}/>
            ))}
        </div>
    )
}

export default CoursesComponent;