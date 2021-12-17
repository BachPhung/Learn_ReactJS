import {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css'
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
    const [showGoTop,setshowGoTop] = useState(false)
    useEffect(()=>{
        console.log(tab);
         //document.title=title
         console.log(data);
        axios.get(`https://jsonplaceholder.typicode.com/${tab}`).then(res=>setData(res.data))
    },[tab])
    useEffect(()=>{
        console.log(showGoTop);
        const scrollHandler = () =>{
            setshowGoTop(window.scrollY>=200)
        }
        window.addEventListener('scroll',scrollHandler)

        //Cleanup function
        return () =>{
            console.log('Unmounting');
            window.removeEventListener('scroll',scrollHandler)
        }
    },[])
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
                {showGoTop && <button className='btn' style={{
                    position: 'fixed',
                    right:20,
                    bottom:20,
                    opacity:0.5,
                }} onClick={()=>window.scrollTo(0,0)}>Go To Top</button>}
            </div>
        </div>
    )
}
