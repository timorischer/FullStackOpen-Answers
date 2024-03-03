const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    return (
      <>
        <h1>{props.course}</h1>
      </>
    )
  }

  const Content = (props) => {
    return (
      <>
        <p>{props.section1} {props.exercise1}</p>
        <p>{props.section2} {props.exercise2}</p>
        <p>{props.section3} {props.exercise3}</p>
      </>
    )
  }

  const Total = (props) => {
    return (
      <>
        <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
      </>
    )
  }

  return (
    <>
      <Header course={course} />
      <Content section1={part1} exercise1={exercises1} section2={part2} exercise2={exercises2} section3={part3} exercise3={exercises3} />
      <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
    </>
  )
}

export default App
