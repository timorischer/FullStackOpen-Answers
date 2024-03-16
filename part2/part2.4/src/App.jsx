const Header = ({ name }) => {
  console.log(name)
  return (
    <h2>{name}</h2>
  )
}

const Part = ({ part }) => {
  console.log(part)
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => 
        <Part key={part.id} part={part} />
      )}
    </>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <>
      <h4>Total of {total} exercises</h4>
    </>
  )
}

const Course = ({ course }) => {
  console.log(course)
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

const Curriculum = ({ courses }) => {
  console.log('Included courses are', courses)
  return (
    <>
      {courses.map((course) =>
        <Course key={course.id} course={course} />
      )}
    </>
  )
}

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts:  [
      {
        id: 1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id: 2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id: 3,
        name: 'State of a component',
        exercises: 14
      },
      {
        id: 4,
        name: 'Extra course i just made up',
        exercises: 10000
      }
    ]
  },
  {
    id: 2,
    name: 'Node.js',
    parts: [
      {
        id: 1,
        name: 'Routing',
        exercises: 3
      },
      {
        id: 2,
        name: 'Middleware',
        exercises: 7
      }
    ]
  }]

  return (
    <>
      <h1>Web-development curriculum:</h1>
      <Curriculum courses={courses} />
    </>
  )
}

export default App