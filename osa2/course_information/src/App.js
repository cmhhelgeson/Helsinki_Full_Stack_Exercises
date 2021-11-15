import React, {useState} from 'react'
import "./App.css"

import Courses from "./Courses"

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
