const Total = ({course}) => {
  return (
  <div className="total">
    <h3>Total of {course.parts.reduce((prev, cur) => {
    return prev + cur.exercises; 
  }, 0)
  } exercises</h3>
  </div>);
}
export default Total;