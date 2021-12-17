import { useState, useEffect } from "react";
import { Content } from "./Content";
import './App.css'
function App() {
/**
 * 1: Update DOM
 *    - blog title
 * 2: Call API
 * 3: Listen DOM events
 *    - Scroll
 *    - Resize
 * 4: Cleanup
 *    - Remove listener/ Unsubcribe
 *    - Clear timer
 */
  const [show,setShow] = useState(false)
  const [countdown, setCountDown] = useState(10)
  const [endCounter,setEndCounter] = useState(false)
  useEffect(() => {
    if(countdown === 0){
      setEndCounter(true)
      setShow(true)
      setCountDown(-1)
    }
    if(countdown===-1){
      return
    }
    const Counter = setInterval(()=>{
      console.log('called');
      setCountDown(countdown - 1)
    },1000)
    return () => {
      window.clearInterval(Counter)
    }
  })
  return (
    <div className="App">
      <h1>{countdown>0?countdown:'0'}</h1>
      <button onClick={()=>setShow(!show)}>Click me!</button>
      <>{show && <Content></Content>}</>
      
    </div>
  );
}

export default App;
