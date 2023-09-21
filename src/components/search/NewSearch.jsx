import React, { useState } from "react";
import styles from "./Newsearch.module.css";
function NewSearch({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <div className={styles.container}>
      <form className={styles.searchBar} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">
          <img
            width="27"
            height="27"
            src="https://img.icons8.com/ios/27/ffffff/search--v1.png"
            alt="search--v1"
          />
        </button>
      </form>
    </div>
  );
}

export default NewSearch;
