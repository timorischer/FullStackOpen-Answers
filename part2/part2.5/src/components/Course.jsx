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
  
  export default Course