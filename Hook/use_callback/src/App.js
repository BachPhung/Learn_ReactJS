import {useEffect, useState, useCallback} from 'react'
import './App.css';
import Content from './Content';

function App() {
  const [count,setCount] = useState(0)
  const handleIncrease = useCallback(() =>{
    setCount(pre=>pre+1)
  },[])
  return (
    <div style={{padding: '10px 32px'}}>
      <h1>{count}</h1>
      <Content onIncrease={handleIncrease}></Content>
    </div>
  );
}

export default App;
