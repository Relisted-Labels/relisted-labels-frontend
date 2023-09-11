import React, { useState, useEffect } from 'react';
import styles from './Searchbar.module.css'; // Import your CSS module

const SearchBar = () => {
  const [selectedCriterion, setSelectedCriterion] = useState('userName'); // Initialize with the default value
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener('resize', updateScreenWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  const handleCustomSelectChange = (criterion) => {
    setSelectedCriterion(criterion);
    setIsOpen(false); // Close the custom select when an option is selected
  };

  const toggleCustomSelect = () => {
    setIsOpen(!isOpen);
  };

  const criteria = [
    { value: 'userName', label: 'Username' },
    { value: 'categoryName', label: 'Category' },
    { value: 'tag', label: 'Tag' }, // Use lowercase 'tag' here
    { value: 'dressType', label: 'Type' }, // Use lowercase 'dressType' here
    { value: 'location', label: 'Location' }, // Use lowercase 'location' here
    { value: 'itemName', label: 'Item Name' }, // Use lowercase 'itemName' here
  ];

  const selectedCriterionLabel = criteria.find((c) => c.value === selectedCriterion)?.label || '';

  const handleSearch = () => {
        console.log("Searched!")
        console.log(searchQuery, selectedCriterion)
  }

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        name="searchQuery"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={screenWidth > 548 ? 'Search by username, item name, category...' : 'Corporate chic'}
      />
      {/* Custom Select */}
      <div className={`${styles['custom-select']} ${isOpen ? styles.open : ''}`}>
        <div className={styles['selected-option']} onClick={toggleCustomSelect}>
          {selectedCriterionLabel}
        </div>
        <div className={styles.options}>
          {criteria.map((criterion) => (
            <div
              key={criterion.value}
              className={styles.option}
              onClick={() => handleCustomSelectChange(criterion.value)}
            >
              {criterion.label}
            </div>
          ))}
        </div>
      </div>

      {/* Hidden Select */}
      <select
        id="hiddenSelect"
        style={{ display: 'none' }}
        value={selectedCriterion}
        onChange={(e) => setSelectedCriterion(e.target.value)}
      >
        {criteria.map((criterion) => (
          <option key={criterion.value} value={criterion.value}>
            {criterion.label}
          </option>
        ))}
      </select>
      {screenWidth > 550 ? ( // Adjust the screen width threshold as needed
        <button onClick={handleSearch}>Search</button>
      ) : (
        <button onClick={handleSearch}><img width="27" height="27" src="https://img.icons8.com/ios/27/ffffff/search--v1.png" alt="search--v1"/></button> // Replace with your icon component
      )}
    </div>
  );
};

export default SearchBar;