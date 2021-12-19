import { useLayoutEffect, useState } from 'react';
import './App.css';
/**
 * useEffect
 * 1: Update state
 * 2: Update DOM (mutated)
 * 3: Re-render UI
 * 4: Call cleanup funtion
 * 5: Call useEffect callback
 * 
 * useLayoutEffect
 * 1: Update state
 * 2: Update DOM (mutated)
 * 3: Call cleanup function(sync)
 * 4: Call useLayoutEffect callback(sync)
 * 5: Re-render UI
 */
function App() {
  const [count,setCount] = useState(0)
  useLayoutEffect(()=>{
    count > 3 ? setCount(0):setCount(count)
  },[count])
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
      </div>
    </div>
    
  );
}

export default App;
