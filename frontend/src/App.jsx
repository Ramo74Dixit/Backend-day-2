import React, { useEffect, useState } from 'react'
import axios from  "axios";
function App (){
  const[jokes,setJokes]=useState([]);
  useEffect(()=>{
    axios.get('/api/jokes')
    .then(response => setJokes(response.data))
    .catch(error => console.log("Error", error));
  })
  return (
    <div>
      <h1>Chai and Code</h1>
      <p>JOKES:{jokes.length}</p>
      
{
  jokes.map((joke,index)=> (
    <div key={joke.id}>
      <h3>{joke.title}</h3>
      <p>{joke.content}</p>
    </div>
  ))
}

    </div>
  )
}

export default App

