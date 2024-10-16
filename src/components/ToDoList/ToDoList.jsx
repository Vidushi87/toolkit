import React from "react";
import styles from './ToDoList.module.css'

const ToDoList = () => {
  return <div className={styles.container}>
  <div className={styles.toDoList}>
    <center>
      <h1>To Do List</h1>
    </center>
  </div>
  </div>;
};

export default ToDoList;
