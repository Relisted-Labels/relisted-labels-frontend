import React, { useState } from "react";
import {BsSearch} from 'react-icons/bs'
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
        <BsSearch className={styles.searchicon} onClick={toggleSearch}/>
      {isSearchOpen && <SearchComponent closeSearch={closeSearch} />}
    </div>
  );
}

export default SearchIcon;
