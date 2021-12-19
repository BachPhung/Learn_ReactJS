import{useState,useMemo, useRef} from 'react'

function App() {
  const [name,setName] = useState('')
  const [price,setPrice] = useState('')
  const [products,setProducts] = useState([])
  const inputRef = useRef()
  const total = useMemo(()=>{
    console.log('render reduce function');
    return products.reduce((result,cur)=>result+cur.price,0)
  },[products])
  const handleSubmit = () => {
    setProducts([...products,{
      name,
      price:+price
    }])
    setName('')
    setPrice('')
    inputRef.current.focus()
  }
  return (
    <div>
      <div>
        <input ref={inputRef} value={name} placeholder='Enter name...' onChange={(e)=>setName(e.target.value)}></input>
        <input value={price} placeholder='Enter price...' onChange={(e)=>setPrice(e.target.value)}></input>
      </div>
      <button onClick={handleSubmit}>Add</button>
      <div>Total: {total}</div>
      <div>
        {products.length>0 && products.map((p,index)=><p key={index}>{p.name}:{p.price}</p>)}
      </div>
    </div>
  );
}

export default App;
