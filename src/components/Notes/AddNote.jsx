import React, { useState } from "react";
import styles from "./Notes.module.css";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const [noteHeading, setNoteHeading] = useState("");
  const characterLimit = 200;
  const headingLimit = 50;

  const handleTextChange = (event) => {
    const note = event.target.value;
    if (characterLimit - note.length >= 0) {
      setNoteText(note);
    }
  };

  const handleHeadingChange = (event) => {
    const note = event.target.value;
    if (headingLimit - note.length >= 0) {
      setNoteHeading(note);
    }
  };

  const handleSave = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText, noteHeading);
      setNoteText("");
      setNoteHeading("");
    }
  };

  return (
    <div className={`p-3 ${styles.addNote}`}>
      <input
        className="fw-bold mb-1"
        placeholder="Type heading..."
        onChange={handleHeadingChange}
        value={noteHeading}
      />
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a new note..."
        value={noteText}
        onChange={handleTextChange}
      />
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
