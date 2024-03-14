const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <>
      <h4>Total number of exercises is: {total}</h4>
    </>
  )
}

export default Total