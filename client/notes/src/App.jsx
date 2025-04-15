import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [notes,setNotes]=useState([]);
  const [note,setNote]=useState({title:"",content:""});
  useEffect(()=>{
    axios.get("http://localhost:3000/api/notes").then((res)=>{
            setNotes(res.data);
    })
  },[]);
  const addnote=()=>{
    axios.post("http://localhost:3000/api/notes",note).then((res)=>{
      
      setNotes([...notes,res.data]);
    });
    setNote({title:"",content:""});
  }
  const deleteNote=(id)=>{
    axios.delete(`http://localhost:3000/api/notes/${id}`).then((res)=>{
       setNotes(notes.filter((n)=>n._id!==id));
    });
  }

  return (
    <div>
      <h1>NOTER</h1>
      <br>
      </br>
      <input placeholder='Enter Title' value={note.title} onChange={(e)=>setNote({...note,title:e.target.value})}></input>
      <hr></hr>
      <input placeholder='Enter Content' value={note.content} onChange={(e)=>setNote({...note,content:e.target.value})}></input>
      <br></br>
      <br></br>
      <br></br>
       <button onClick={addnote}>Add Note</button>

       <ul>
        {
          notes.map((n)=>(
            <li key={n._id}>
              <h2>{n.title}</h2>
              <h4>{n.content}</h4>
              <button onClick={()=>deleteNote(n._id)}>Delete Note</button>
            </li>
          ))
        }
       </ul>
    </div>
  )
}

export default App