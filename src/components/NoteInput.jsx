import { useState } from "react";
function NoteInput({ setNotes }) {
  const [input, setInput] = useState("");
  function addNote() {
    if (input.trim() === "") return; // Prevent adding empty notes
    setNotes((prev) => [...prev, input]);
    setInput("");
  }
  return (
    <>
      <input type="text" placeholder="Enter your note" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addNote}>Add Note</button>
    </>
  );
}
export default NoteInput;
