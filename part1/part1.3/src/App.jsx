const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.title1} {props.exercise1}</p>
      <p>{props.title2} {props.exercise2}</p>
      <p>{props.title3} {props.exercise3}</p>
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <>
      <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header title={course} />
      <Content title1={part1.name} exercise1={part1.exercises} title2={part2.name} exercise2={part2.exercises} title3={part3.name} exercise3={part3.exercises}/>
      <Total exercise1={part1.exercises} exercise2={part2.exercises} exercise3={part3.exercises} />
    </div>
  )
}

export default App
