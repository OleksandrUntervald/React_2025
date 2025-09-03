import type {ICourses} from "../../models/ICourses.ts";
import type {FC} from "react";


type CoursesComponent = {
    course: ICourses;
}

const CourseComponent: FC<CoursesComponent> = ({course}) => {
    return (
        <ul>
            <li className='border p-2'>Course name: {course.title}</li>
            <li>Course duration: {course.monthDuration}</li>
        </ul>
    )
}
export default CourseComponent