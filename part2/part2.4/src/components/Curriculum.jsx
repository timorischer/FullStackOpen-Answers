import Course from "./Course"

const Curriculum = ({ courses }) => {
    console.log(courses)
    return (
        <>
            {courses.map((course) =>
                <Course key={course.id} course={course} />
            )}
        </>
    )
}

export default Curriculum