import {createStore} from 'redux'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import {noteReducer}  from './reducers/noteReducer'
const store = createStore(noteReducer)


function App() {
  const [note,setNote] = useState('')
  console.log(store.getState());
  return (
    <div>
      <ul>
          {store.getState().map(item=><li>{item}</li>)}
      </ul>
     <div>
       <input value={note} placeholder='Input' onChange={e=>setNote(e.target.value)}></input>     
       <button onClick={()=>{
         store.dispatch({type:'NEW_NOTE',data:note})
         setNote('');
         document.querySelector('input').focus()
         }}>ADD</button>
     </div>
   </div>
  );
}

const renderApp = () => {
  ReactDOM.render(<App/>,document.getElementById('root'))
}

renderApp();
store.subscribe(renderApp)
export default App;
