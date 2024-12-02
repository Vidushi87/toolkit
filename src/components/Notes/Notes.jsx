import React, { useState } from "react";
import { nanoid } from "nanoid";
import styles from "./Notes.module.css";
import NotesList from "./NotesList";

const Notes = () => {
  const [notes, SetNotes] = useState([
    { id: nanoid(), text: "this is my first note", date: "01/12/2024" },
    { id: nanoid(), text: "this is my old note", date: "01/11/2024" },
    { id: nanoid(), text: "this is my note", date: "28/11/2024" },
    { id: nanoid(), text: "this is note", date: "30/11/2024" },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.notes}>
        <center>
          <h1>Notes</h1>
        </center>
        <NotesList notes={notes}/>
      </div>
    </div>
  );
};

export default Notes;
