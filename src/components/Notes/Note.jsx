import React from "react";
import styles from "./Notes.module.css";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className={`p-3 ${styles.note}`}>
      <span>{text}</span>
      <div className={styles.noteFooter}>
        <small>{date}</small>
        <i
          className={`bi bi-trash ${styles.deleteIcon}`}
          onClick={() => handleDeleteNote(id)}
        ></i>
      </div>
    </div>
  );
};

export default Note;
