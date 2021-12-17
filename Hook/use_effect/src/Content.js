import {useEffect, useState} from 'react'
import axios from 'axios'
/**
 * 1: useEffect(callback)
 * -    Call callback function after component adds element into DOM
 * 2: useEffect(callback,[])
 * 3: useEffect(callback,[dependencies])
 * 
 * ------General-------
 * 
 * - Callback called after component mounted
 */

const tabs = ['posts','comments','albums']
export const Content = () => {
    const [title,setTitle] = useState('')
    const [data,setData] = useState([])
    const [tab,setTab] = useState('post')
    useEffect(()=>{
        console.log(tab);
         //document.title=title
        axios.get(`https://jsonplaceholder.typicode.com/${tab}`).then(res=>setData(res.data))
    },[tab])
    return (
        <div>
            <h1>Hello everybody</h1>
            <div>
                <input placeholder='Change website title' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                <div>
                    {tabs.map(t=>{
                    return <button key={t} onClick={()=>setTab(t)}>{t}</button>
                    })}
                </div>
                <ul>
                    {data.map(item=>{
                            return (<li key={item.id}>{item.title || item.body}</li>)
                    })}
                </ul>
            </div>
        </div>
    )
}
