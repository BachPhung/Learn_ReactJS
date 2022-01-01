import {createStore} from 'redux'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import {noteReducer}  from './reducers/noteReducer'
import { useSelector, useDispatch } from 'react-redux'
const generateId = () => Math.floor(Math.random()*1000000)

function App() {
  const dispatch = useDispatch()
  const notes = useSelector(state=>state);
  const [note,setNote] = useState('')
  const toggleImportance = (id) =>{
    dispatch({
      type: 'TOGGLE_IMPORTANCE',
      data:{id}
    })
  }
  return (
    <div>
      
     <div>
       <input value={note} placeholder='Input' onChange={e=>setNote(e.target.value)}></input>     
       <button onClick={()=>{
         dispatch({type:'NEW_NOTE',data:{
           content:note,
           important:false,
           id: generateId()
         }})
         setNote('');
         document.querySelector('input').focus()
         }}>ADD</button>
     </div>
     <ul>
          {notes.map(item=>
          <li 
            onClick={()=>toggleImportance(item.id)}
            key={item.id}>
             
             {item.important?<strong>{item.content}</strong>:<>{item.content}</>}
          </li>)}
      </ul>
   </div>
  );
}


export default App;
