import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(60)
  const timerId = useRef()
  const preCount = useRef()
  console.log(preCount.current);
  useEffect(()=>{
    preCount.current = count
  },[count])
  const handleStart = () =>{
    timerId.current = setInterval(()=>setCount(pre=>pre-1),1000)
  }
  const handleStop = () =>{
    clearInterval(timerId.current)
  }
  return (
    <div style={{padding:20}} className="App">
        <h1>{count}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
