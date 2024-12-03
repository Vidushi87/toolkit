import React from "react";
import styles from "./Notes.module.css";
import Note from "./Note";
import AddNote from "./AddNote";
import Search from "./Search";

const NotesList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleSearchNote,
}) => {
  console.log(notes)
  return (
    <div className={`${styles.notesContainer}`}>
      <Search handleSearchNote={handleSearchNote} />
      <div className={`${styles.notesList}`}>
        <AddNote handleAddNote={handleAddNote} />
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            heading={note.heading}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
