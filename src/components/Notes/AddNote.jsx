import React, { useState } from "react";
import styles from "./Notes.module.css";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    const note = event.target.value;
    if (characterLimit - note.length >= 0) {
      setNoteText(note);
    }
  };

  const handleSave = (event) => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className={`p-3 ${styles.note} ${styles.addNote}`}>
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a new note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className={styles.noteFooter}>
        <small>{characterLimit - noteText.length} remaining</small>
        <button className={`btn ${styles.save}`} onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
