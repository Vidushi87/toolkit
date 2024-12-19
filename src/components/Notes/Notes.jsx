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

  const addNote = (text, heading) => {
    const date = new Date().toLocaleDateString();
    const newNote = {
      id: nanoid(),
      heading,
      text,
      date,
    };

    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const handleEditNote = (id, newText, newHeading) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id
          ? { ...note, text: newText, heading: newHeading }
          : note
      )
    );
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
          handleEditNote={handleEditNote}  // Pass handleEditNote function
        />
      </div>
    </div>
  );
};

export default Notes;
