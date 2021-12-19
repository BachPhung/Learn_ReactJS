import {useEffect, useState} from 'react'
import './App.css';
import Content from './Content';

function App() {
  const [count,setCount] = useState(0)
  const increase = () =>{
    setCount(count+1)
  }
  return (
    <div style={{padding: '10px 32px'}}>
      <h1>{count}</h1>
      <Content></Content>
      <button onClick={increase}>Click me!</button>
      
    </div>
  );
}

export default App;
