import React, {useState} from 'react'


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
  return <h3>{course.parts.length}</h3>
}

function App() {

  const [course, setCourse] = useState({
    name: "Half Stack Application Development",
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  })

  const [input_text, setText] = useState("");
  const [timer, setTimer] = useState(0);

  const addPart = () => {
    const new_part = {
      name: input_text, 
      exercises: (Math.floor(Math.random() * 25) + 1)
    }
    setCourse({...course, parts: [...course.parts, new_part]});
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
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
      <label for="course_input">Input Course Info and Exercises: </label>
      <br></br>
      <input type="text" name="course_input" onChange={changeText}/>
      <input type="submit" name="course_input"text="New Part" onClick={addPart}/>
      <p>{timer}</p>
       
    </div>
  );
}

export default App;
