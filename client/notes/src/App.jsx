import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({ title: "", content: "" });

  useEffect(() => {
    axios.get("https://notes-1-nxrg.onrender.com/api/notes")
      .then((res) => {
        setNotes(res.data);
      });
  }, []);

  const addNote = () => {
    axios.post("https://notes-1-nxrg.onrender.com/api/notes", note)
      .then((res) => {
        setNotes([...notes, res.data]);
      });
    setNote({ title: "", content: "" });
  };

  const deleteNote = (id) => {
    axios.delete(`https://notes-1-nxrg.onrender.com/api/notes/${id}`)
      .then(() => {
        setNotes(notes.filter((n) => n._id !== id));
      });
  };

  return (
    <div>
      <h1>NOTERS</h1>
      <br />
      <input
        placeholder="Enter Title"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
      />
      <hr />
      <input
        placeholder="Enter Content"
        value={note.content}
        onChange={(e) => setNote({ ...note, content: e.target.value })}
      />
      <br /><br /><br />
      <button onClick={addNote}>Add Note</button>

      <ul>
        {notes.map((n) => (
          <li key={n._id}>
            <h2>{n.title}</h2>
            <h4>{n.content}</h4>
            <button onClick={() => deleteNote(n._id)}>Delete Note</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
