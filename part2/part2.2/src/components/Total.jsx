const Total = ({ parts }) => {
    var totalAmount = parts.reduce((sum, part) => 
      sum + part.exercises, 0)
    return (
      <>
        <h4>Total amount of exercises: {totalAmount}</h4>
      </>
    )
  }

  export default Total