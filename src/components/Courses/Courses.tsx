import {coursesArray} from "../../data/data.ts";
import {Course} from "../Course/Course.tsx";

export const Courses= () => {
    return (
        <>
            {coursesArray.map((course, index) =>  <Course course={course} key={index}>
                {course.modules}
            </Course>)}
        </>
    )
}