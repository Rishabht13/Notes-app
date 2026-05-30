import { useState } from "react";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <>
      <div className="app">
        <h1>Notes App</h1>
        <NoteInput setNotes={setNotes} />
        <NotesList notes={notes} setNotes={setNotes} />
      </div>
    </>
  );
};

export default App;
