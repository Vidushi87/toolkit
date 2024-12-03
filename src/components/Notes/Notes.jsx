import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import styles from "./Notes.module.css";
import NotesList from "./NotesList";

const Notes = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("toolkit-notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    localStorage.setItem("toolkit-notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date().toLocaleDateString();
    const newNote = {
      id: nanoid(),
      text,
      date,
    };

    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.notes}>
        <center>
          <h1>Notes</h1>
        </center>
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleSearchNote={setSearchText}
        />
      </div>
    </div>
  );
};

export default Notes;
