function NotesList({ notes, setNotes }) {
  function deleteNote(index) {
    setNotes((prev) => prev.filter((_, i) => i !== index));
  }
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
}
export default NotesList;
