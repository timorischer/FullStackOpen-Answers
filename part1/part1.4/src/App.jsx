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
      <p>{props.sections[0].name} {props.sections[0].exercises}</p>
      <p>{props.sections[1].name} {props.sections[1].exercises}</p>
      <p>{props.sections[2].name} {props.sections[2].exercises}</p>
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <>
      <p>Number of exercises {props.sections[0].exercises + props.sections[1].exercises + props.sections[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header title={course} />
      <Content sections={parts} />
      <Total sections={parts} />
    </div>
  )
}

export default App
