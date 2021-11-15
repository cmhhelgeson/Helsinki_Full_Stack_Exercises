import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => {
  return (
  <div className="course">
    <Header course={course}/>
    <Content course={course}/>
    <Total course={course}/> 
  </div>);
}

export default Course;