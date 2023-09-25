import { useState } from 'react';
import './Counter.css';
import CounterButton from '../counter button/CounterButton';

export default function Counter() {
  const [count, setCount] = useState(0)

  function counterTrigger(by) {
    setCount(count + by)
  }

  function resetCounter() {
    setCount(0);
  }

  return (
    <div>
      <span className="totalCount">{count}</span>
      <CounterButton by={1} counterTrigger={counterTrigger}/>
      <CounterButton by={3} counterTrigger={counterTrigger}/>
      <CounterButton by={5} counterTrigger={counterTrigger}/>
      <button className="resetButton" onClick={resetCounter}>reset</button>
    </div>
  )
}
