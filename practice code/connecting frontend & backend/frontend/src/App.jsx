import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes,setJokes] = useState([]);

  useEffect(()=>{
    axios.get('/api/jokes')
    // if get req successfully runs, then response ka data use karlo to set the usestate 
    .then((Response)=>{
      setJokes(Response.data)
    })
    // agar koi error aaye, to usko catch karke console.llog kar dena
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
      <h1>hello!</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke, index)=>(
          <div key={joke.id} >
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
