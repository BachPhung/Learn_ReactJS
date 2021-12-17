import { useState } from "react";
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
  return (
    <div className="App">
      <button onClick={()=>setShow(!show)}>Click me!</button>
      <>{show && <Content></Content>}</>
    </div>
  );
}

export default App;
