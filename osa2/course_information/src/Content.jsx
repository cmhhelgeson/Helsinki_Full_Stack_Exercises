import Part from './Part'


const Content = ({course}) => {
  return (
    <div className="Content">
    {course.parts.map((part, partIndex) => {
      /*Don't use index as key except in instances like these */
      return <><Part key={partIndex}part={part}/></>
    })}
    </div>
  )
}
export default Content;