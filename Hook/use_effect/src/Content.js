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

 const lessons = [
    {
      id:1,
      name:'React'
    },
    {
      id:2,
      name:'SPA/MPA'
    },
    {
      id:3,
      name:'Arrow function'
    }
  ]

export const Content = () => {

    const [lessonID, setLessonID] = useState(1)
    useEffect(()=>{
        const handleComment = (e)=>{
            console.log(e.detail);
        }
        window.addEventListener(`lesson-${lessonID}`,handleComment)
        return()=>{
        window.removeEventListener(`lesson-${lessonID}`,handleComment)
        }
    },[lessonID])
    return(
        <div>
            {lessons.map(lesson =>(
                <li key={lesson.id}
                    style={{
                        color: lessonID === lesson.id ?
                                'red' :
                                'black'  
                    }}    
                onClick={()=>setLessonID(lesson.id)} >
                {lesson.name}
                </li>
            ))

            }
        </div>
    )
    
}
