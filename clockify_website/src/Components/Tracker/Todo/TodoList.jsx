import React from "react";
import styles from "./TodoList.module.css";

export const TodoList = ({title, id, status, handleDelete, handleToggle}) => {
  return (
    <div className={styles.Container}>
      <h3>{title}</h3>
      <h4>{status ? "DONE" : "NOT DONE"}</h4>
      <button className={styles.btn} onClick={() => handleToggle(id, !status)}>
        TOGGLE
      </button>
      <button className={styles.btn} onClick={() => handleDelete(id)}>
        DELETE
      </button>
    </div>
  );
};
