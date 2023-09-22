import React, { useState } from "react";
import styles from "./Searchcomponent.module.css";
import NewSearch from "./NewSearch";
import ItemsList from "../searchresult/Itemslist";

function SearchComponent({ closeSearch }) {
  const items = [
    {
      imageSrc: "../../assets/moreLike.png",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Shirt",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/moreLike.png",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Shirt",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/moreLike.png",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Shirt",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/moreLike.png",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Shirt",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/moreLike.png",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Shirt",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/moreLike.png",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Glamorous",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/moreLike.png",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Glamorous",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/moreLike.png",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Glamorous",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/moreLike.png",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Glamorous",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/moreLike.png",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Glamorous",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/moreLike.png",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Glamorous",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/moreLike.png",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Glamorous",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/moreLike.png",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Glamorous",
      price: "Rent from E21",
      discount: "PRP E90",
    },
    {
      imageSrc: "../../assets/moreLike.png",
      text: "Dress, UK 12",
      altText: "Dress, UK 12",
      itemName: "Glamorous",
      price: "Rent from E21",
      discount: "PRP E90",
    },
  ];

  const [filteredItems, setFilteredItems] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm) => {
    const filtered = items.filter((item) =>
      item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
     setSearchTerm(searchTerm);
  };

  
  let content;
  if (searchTerm === "") {  
    content = null;
  } else if (filteredItems.length === 0) {
    content = <p className={styles.searcherror}>No items were found matching the description.</p>;
  } else {
    content = <ItemsList items={filteredItems} />;
  }

  return (
    <div className={styles.searchcomponent}>
      <h2 className={styles.close} onClick={closeSearch}>
        X
      </h2>
      <NewSearch handleSearch={handleSearch} />
      {content}
    </div>
  );
}

export default SearchComponent;
