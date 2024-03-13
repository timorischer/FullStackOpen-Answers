import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <td>{text}:</td>
      <td>{value}</td>          
    </>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props

  const total = good + neutral + bad
  const positive = good / total * 100
  const average = (good - bad) / total

  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <>
      <table>
        <tbody>
          <tr><StatisticLine text='Good' value={good} /></tr>
            <tr><StatisticLine text='Neutral' value={neutral} /></tr>
            <tr><StatisticLine text='Bad' value={bad} /></tr>
            <tr><StatisticLine text='Positive' value={positive} /></tr>
            <tr><StatisticLine text='Average' value={average} /></tr>
        </tbody>
      </table>
    </>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App