import React, { useState } from "react";
import SearchComponent from "./SearchComponent";
import styles from "./Searchcomponent.module.css";


function SearchIcon() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchicon} onClick={toggleSearch}>
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/ios/27/ffffff/search--v1.png"
          alt="search--v1"
        />
      </div>
      {isSearchOpen && <SearchComponent closeSearch={closeSearch} />}
    </div>
  );
}

export default SearchIcon;
