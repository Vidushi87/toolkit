import React from "react";
import styles from "./Notes.module.css";

const Search = ({ handleSearchNote }) => {
  return (
    <div className={`d-flex align-items-center p-2 mb-2 ${styles.search}`}>
      <i className="bi bi-search me-2"></i>
      <input
        onChange={(e) => handleSearchNote(e.target.value)}
        type="text"
        placeholder="Type to search..."
      />
    </div>
  );
};

export default Search;
