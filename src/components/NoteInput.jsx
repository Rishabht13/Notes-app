import { useState } from "react";
function NoteInput({ setNotes }) {
  const [input, setInput] = useState("");
  function addNote() {
    if (input.trim() === "") return; // Prevent adding empty notes
    setNotes((prev) => [...prev, input]);
    setInput("");
  };
  return (
    <>
    <div className="input-container">
      <input type="text" placeholder="Enter your note" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addNote}>Add Note</button>
    </div>
    </>
  );
};
export default NoteInput;
