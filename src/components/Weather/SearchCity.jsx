import styles from "./Weather.module.css";
import React from "react";

const SearchCity = ({ handleSubmit }) => {
  return (
    <form className={`d-flex ${styles.search}`} onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        placeholder="Search City"
        name="city"
      />
      <button className="btn btn-outline-secondary" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchCity;
