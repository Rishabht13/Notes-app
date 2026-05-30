import { useState } from "react";
import "./App.css";

 function NotesList({notes, setNotes}) {
    function deleteNote(index){
      setNotes((prev) => prev.filter((_, i) => i !== index));
    };
  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>
          {note}
          <button onClick={() => deleteNote(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
function NoteInput({setNotes}){
  
    const [input,setInput] = useState("");
     function addNote() {
      if(input.trim() === "") return; // Prevent adding empty notes
    setNotes((prev)=>[...prev, input]);
    setInput('');
  };
    return(
      <>
    <input type="text" placeholder="Enter your note" 
      value={input}
      onChange={(e)=>setInput(e.target.value)} />
      <button onClick={addNote}>Add Note</button>
      </>
    )
};

function App() {
  
 const [notes, setNotes] = useState([]);
  
  return (
    <>
      <NoteInput setNotes={setNotes} />
      <NotesList notes={notes} setNotes={setNotes} />
    </>
  );
};

export default App;
