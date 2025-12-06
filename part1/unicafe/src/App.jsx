import { useState } from "react"
const Button = ({ text, handleClick }) => (<button onClick={handleClick}>{text}</button>)
const StatisticLine = ({ text, statistic }) => (<tr><td>{text}</td><td>{statistic}</td></tr>)
const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0){
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
      <tbody>
      <StatisticLine text="good" statistic={good} />
      <StatisticLine text="neutral" statistic={neutral} />
      <StatisticLine text="bad" statistic={bad} />
      <StatisticLine text="all" statistic={good + neutral + bad} />
      <StatisticLine text="average" statistic={(good - bad) / (good + neutral + bad)} />
      <StatisticLine text="positive" statistic={good / (good + neutral + bad) * 100 + "%"} />
      </tbody>
      </table>
    </div>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
export default App