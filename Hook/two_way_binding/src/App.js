import './App.css';
import { useState } from 'react';
/**
 * 1: Random gift
 * 2: Two way binding
 * 3: Todolist
 */
// function App() {
//   const gifts = [
//     'CPU i9',
//     'RAM 32GB RGB',
//     'RGB Keyboard'
//   ]
//   const [gift,setGift] = useState([])
//   const randomGift = () =>{
//     const index = Math.floor(Math.random() * 3);
//     setGift(gift.concat(gifts[index]))
//   }
//   return (
//     <div className="App">
//       <button onClick={randomGift}>Get gift</button>
//       <h1>{gift.length !==0 || "You don't have any presents"}</h1>
//       <h1>{gift.map(g=><p> {g} </p>)}</h1>
//     </div>
//   );
// }

// const App = () =>{
//   const [name,setName]= useState('')
//   const [email,setEmail]= useState('')
//   console.log(name);
//   return (
//     <div>
//       <input value={name} placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}></input>
//       <input value={email} placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)}></input>
//       <button onClick={()=>setName('Tom Hardy')}>Register</button>
//     </div>
//   )
// }

// const App = () =>{
//   const courses=[
//     { 
//       id:1,
//       course: 'HTML'
//     },
//     { 
//       id:2,
//       course: 'Javascript'
//     },
//     { 
//       id:3,
//       course: 'ReactJS'
//     }
//   ]
//   const [check,setCheck] = useState()
//   return(
//     <div>
//       {courses.map(c=>(
//         <div key={c.id} >
//             <input type='radio' checked={check===c.id} onChange={()=>setCheck(c.id)}/>{c.course}
//         </div>
//       ))}
//     </div>
//   )
// }

const App = () =>{
  const courses=[
    { 
      id:1,
      course: 'HTML'
    },
    { 
      id:2,
      course: 'Javascript'
    },
    { 
      id:3,
      course: 'ReactJS'
    }
  ]
  const [check,setCheck] = useState([])
  console.log(check);
  return(
    <div>
      {courses.map(c=>(
        <div key={c.course} >
            <input type='checkbox' checked={check.includes(c.id)} onChange={()=>{
              let index = check.includes(c.id)
              if(!index){
                setCheck(check.concat(c.id))
              }
              else{
                setCheck(check.filter(ch=>ch!==c.id))
              }
              
              }}/>{c.course}
        </div>
      ))}
    </div>
  )
}

export default App;
