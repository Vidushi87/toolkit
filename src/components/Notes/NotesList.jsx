import React from "react";
import styles from "./Notes.module.css";
import Note from "./Note";
import AddNote from "./AddNote";
import Search from "./Search";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className={`${styles.notesContainer}`}>
      <Search />
      <div className={`${styles.notesList}`}>
        <AddNote handleAddNote={handleAddNote} />
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
