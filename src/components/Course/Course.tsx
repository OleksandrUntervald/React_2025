import type {ICourse} from "../../models/ICourses.ts";
import type {ReactNode} from "react";

type CourseProps = {
    course: ICourse,
    children: ReactNode
}

export const Course= ({course, children}: CourseProps) => {
    return (
        <div className='px-4 border-2 shadow text-base flex flex-col items-center gap-2 border-gray-300 bg-green-200'>
            <p>{course.title}</p>
            <p>{course.monthDuration}</p>
            <p>{course.hourDuration}</p>
            <p>{children}</p>
        </div>
    )
}