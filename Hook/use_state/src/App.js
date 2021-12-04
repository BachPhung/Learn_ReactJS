import { useState } from 'react';
import './App.css';

const orders =[100,200,300]

function App() {
  const [info, setInfo] = useState({
    name: 'Bach Phung',
    age: 18,
    address: 'Finland'
  })
  const handleUpdate = () =>{
    setInfo({
      ...info,
      bio: 'Love pink color'
    })
  }
  const [count, setCount] = useState(()=>{
    return orders.reduce((a,cur)=>a+cur)
  });

  const handleIncrease = () =>{
    setCount(preState=>preState+1)
  }
  return (
    <div className="App">
      <p>Count: {count}</p>
      <button onClick={handleIncrease /*()=>setCount(count + 1)*/}>Click</button>
      <button onClick={handleUpdate}>Update</button>
      <h1>{JSON.stringify(info)}</h1>
    </div>
  );
}

export default App;
