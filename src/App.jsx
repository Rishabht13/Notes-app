import { useState } from "react";
import "./App.css";

 function NotesList({notes}) {
  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>{note}</li>
      ))}
    </ul>
  );
};
function NoteInput({setNotes}){
  
    const [input,setInput] = useState("");
     function addNote() {
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
      <NotesList notes={notes} />
    </>
  );
};

export default App;
