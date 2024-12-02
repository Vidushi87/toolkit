import React from "react";
import styles from "./Notes.module.css";
import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes }) => {
  return (
    <div className={`${styles.notesList}`}>
      <AddNote />
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
    </div>
  );
};

export default NotesList;
