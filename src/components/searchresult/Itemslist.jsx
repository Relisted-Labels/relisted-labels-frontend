import React from "react";
import styles from "./itemslist.module.css";
function ItemsList({ items }) {
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index} className={styles.itemCard}>
          <img src={item.imageSrc} className={styles.itemImage} alt={item.altText} />
          <p className={styles.text}>{item.text}</p>
          <p className={styles.itemName}>{item.itemName}</p>
          <p className={styles.itemName}>{item.price}</p>
          <p className={styles.discount}>{item.discount}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;
