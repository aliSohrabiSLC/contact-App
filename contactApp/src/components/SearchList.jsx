import React from "react";
import styles from "./SearchList.module.css";

function SearchList({ searchTerm, setSearchTerm }) {
  const searchHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Real Time Search contacts..."
        value={searchTerm}
        onChange={searchHandler}
        className={styles.searchInput}
      />
    </div>
  );
}

export default SearchList;
