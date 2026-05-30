import { useState } from "react";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <>
      <NoteInput setNotes={setNotes} />
      <NotesList notes={notes} setNotes={setNotes} />
    </>
  );
}

export default App;
