import React, {useState} from 'react'
import "./App.css"

const Courses = ({courses}) => {
  return (
    <div className="Courses">
      {courses.map((course) => {
        return <Course key={course.name} course={course} />
      })}
    </div>
  )
}

const Course = ({course}) => {
  return (
  <div className="course">
    <Header course={course}/>
    <Content course={course}/>
    <Total course={course}/> 
  </div>);
}


const Part = ({part}) => {
  return (
    <div className="Part">
      <p>{part.name} : {part.exercises}</p>
    </div>
  );
}

const Header = ({course}) => {
  return (<header className="header">
    <h1>{course.name}</h1>
  </header>);
}

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

const Total = ({course}) => {
  return (
  <div className="total">
    <h3>Total of {course.parts.reduce((prev, cur) => {
    return prev + cur.exercises; 
  }, 0)
  } exercises</h3>
  </div>);
}

function App() {

  const [courses, setCourses] = useState([
      {
        name: 'Half Stack application development',
        id: 1,
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      },
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
  ]);

  const [selected, setSelected] = useState(0);

  const [input_text, setText] = useState("");
  const [timer, setTimer] = useState(0);

  const addPart = () => {
    let temp_data = [...courses];
    let index = temp_data.findIndex(obj => obj.id === selected + 1);
    const new_part = {
      name: input_text, 
      exercises: (Math.floor(Math.random() * 25) + 1), 
      id: temp_data[index].parts.length
    }
    temp_data[index].parts = [...temp_data[index].parts, new_part];
    setCourses(temp_data);
  }

  const changeText = (event) => {
    setText(event.target.value);
  }

  setTimeout(
    () => {
      setTimer(timer + 1)
    }, [1000]
  );

  return (
    <div className="App">
      <Courses courses={courses}/>
      Add Part to Course {selected + 1}
      <div id ='simple'>
        <button id='p'
          onClick={() => setSelected((selected - 1) % courses.length)}>‹</button>
        <button id='n' 
          onClick={() => setSelected((selected + 1) % courses.length)}>›</button>
      </div>
      <label for="course_input">Input Course Info and Exercises: </label>
      <br></br>
      <input type="text" name="course_input" onChange={changeText}/>
      <input type="submit" name="course_input"text="New Part" onClick={addPart}/>
      <br></br>
      <p>{timer}</p>
       
    </div>
  );
}

export default App;
