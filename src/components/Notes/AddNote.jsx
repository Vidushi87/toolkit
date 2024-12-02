import React from "react";
import styles from "./Notes.module.css";

const AddNote = () => {
  return (
    <div className={`p-3 ${styles.note} ${styles.addNote}`}>
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a new note..."
      ></textarea>
      <div className={styles.noteFooter}>
        <small>200 remaining</small>
        <button className={`btn ${styles.save}`}>Save</button>
      </div>
    </div>
  );
};

export default AddNote;
