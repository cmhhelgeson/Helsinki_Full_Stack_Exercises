import Course from './Course'

const Courses = ({courses}) => {
  return (
    <div className="Courses">
      {courses.map((course) => {
        return <Course key={course.name} course={course} />
      })}
    </div>
  )
}

export default Courses;