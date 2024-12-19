import React, { useState } from "react";
import styles from "./Notes.module.css";

const Note = ({
  id,
  text,
  date,
  heading,
  handleDeleteNote,
  handleEditNote, // Receive handleEditNote
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);
  const [newHeading, setNewHeading] = useState(heading);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    handleEditNote(id, newText, newHeading); // Call handleEditNote when saving
    setIsEditing(false);
  };

  return (
    <div className={`p-3 ${styles.note}`}>
      <div>
        {isEditing ? (
          <div className={styles.editNote}>
            <input
              type="text"
              value={newHeading}
              onChange={(e) => setNewHeading(e.target.value)}
              className="fw-bold mb-1"
            />
            <textarea
              rows="8"
              cols="10"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          </div>
        ) : (
          <>
            <p className="fw-bold">{heading}</p>
            <span>{text}</span>
          </>
        )}
      </div>
      <div className={styles.noteFooter}>
        <small>{date}</small>
        <div>
          <i
            className={`bi bi-trash m-2 ${styles.icon}`}
            onClick={() => handleDeleteNote(id)}
          ></i>
          {isEditing ? (
            <i
              className={`bi bi-floppy-fill m-2 ${styles.icon}`}
              onClick={handleSaveClick}
            >
            </i>
          ) : (
            <i
              className={`bi bi-pencil-square m-2 ${styles.icon}`}
              onClick={handleEditClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Note;
