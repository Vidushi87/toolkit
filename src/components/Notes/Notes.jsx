import React, { useState } from "react";
import { nanoid } from "nanoid";
import styles from "./Notes.module.css";
import NotesList from "./NotesList";

const Notes = () => {
  const [notes, setNotes] = useState([
    { id: nanoid(), text: "this is my first note", date: "01/12/2024" },
    { id: nanoid(), text: "this is my old note", date: "01/11/2024" },
    { id: nanoid(), text: "this is my note", date: "28/11/2024" },
    { id: nanoid(), text: "this is note", date: "30/11/2024" },
  ]);

  const addNote = (text) => {
    const date = new Date().toLocaleDateString;
    const newNote = {
      id: nanoid(),
      text: text,
      date: date,
    };

    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={styles.container}>
      <div className={styles.notes}>
        <center>
          <h1>Notes</h1>
        </center>
        <NotesList
          notes={notes}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default Notes;
