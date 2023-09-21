import React, { useState } from "react";
import styles from "./Searchcomponent.module.css";
import NewSearch from "./NewSearch";
import ItemsList from "../searchresult/Itemslist";

function SearchComponent({ closeSearch }) {
  const items = [
    {
      imageSrc: "../../assets/Blazer.avif",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Shirt",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/Blazer.avif",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Shirt",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/Blazer.avif",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Shirt",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/Blazer.avif",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Shirt",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/Blazer.avif",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Shirt",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/Blazer.avif",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Glamorous",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/Blazer.avif",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Glamorous",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/Blazer.avif",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Glamorous",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/Blazer.avif",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Glamorous",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/Blazer.avif",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Glamorous",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/Blazer.avif",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Glamorous",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/Blazer.avif",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Glamorous",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/Blazer.avif",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Glamorous",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/Blazer.avif",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Glamorous",
      price: "Rent from E21",
      discount: "PRP E90",
    },
  ];

  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (searchTerm) => {
    const filtered = items.filter((item) =>
      item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div className={styles.searchcomponent}>
      <h2 className={styles.close} onClick={closeSearch}>
        X
      </h2>
      <NewSearch handleSearch={handleSearch} />
      <ItemsList items={filteredItems} />
    </div>
  );
}

export default SearchComponent;
