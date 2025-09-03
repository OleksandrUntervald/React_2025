import type {ICoursesAndDurationArray} from "../moduls/IProduct.ts";
import type {FC} from "react";

type MyCoursesType = {
    course: ICoursesAndDurationArray;
}

const MyCourses: FC<MyCoursesType>= ({course}) => {
    return(
        <div>
            <div> {course.title}</div>
            <div> CourseDuration=  {course.monthDuration}</div>
        </div>
    )
}

export default MyCourses