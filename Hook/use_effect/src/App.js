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
  const [pic,setPic] = useState('')
  const handlePreviewChange = (e) => {
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
    setPic(file)
  }
  useEffect(()=>{
    return ()=>{
      pic && URL.revokeObjectURL(pic.preview)
    }
  },[pic])
  return (
    
    <div className="App">
      <input type='file' onChange={handlePreviewChange}></input>
      <img style={{width:300,height:200,borderRadius:10}} src={pic.preview}>{console.log(pic)}</img>
      <button onClick={()=>setShow(!show)}>Click me!</button>
      <>{show && <Content></Content>}</>
    </div>
  );
}

export default App;
