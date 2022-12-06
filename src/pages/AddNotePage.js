import React from "react";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import NoteInput from "../component/NoteInput";

function AddNotePage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    navigate("/");
  }
  return (
    <section>
      <h2>Tambah Catatan Baru</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddNotePage;
