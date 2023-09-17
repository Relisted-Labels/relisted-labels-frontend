import React from "react";
import styles from "./Newsection.module.css";


const NewSectionCard = ({ imageSrc, altText, itemName, price,text,discount }) => {
  return (
    <div >
      <img src={imageSrc} alt={altText} className={styles.itemImage} />
      <h4 className={styles.itemName}>{itemName}</h4>
      <h4 className={styles.text} >{text}</h4>
      <h4 className={styles.itemName}>{price}</h4>
      <h4 className={styles.discount}>{discount}</h4>
    
    </div>
  );
};

export default NewSectionCard;
