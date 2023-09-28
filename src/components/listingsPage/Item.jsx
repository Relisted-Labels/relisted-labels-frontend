import { useState, useEffect } from "react";
import styles from './Item.module.css'
import Blazer from '../../assets/jumpsuit.png'

const Item = () => {

    const cards = [
      {
        productImg: Blazer,
        text: "Dress, UK 12",
        altText: "Dress, UK 12",
        itemName: "Glamorous",
        price: "Rent from E21",
        discount: "PRP E90",
      },
     
    ];
    
    return (
      <div>
        {cards.map((card, index) => (
          <div key={index}>
            <img
              src={card.productImg}
              alt={card.altText}
              className={styles.itemImage}
            />
            <h4 className={styles.itemName}>{card.itemName}</h4>
            <h4 className={styles.text}>{card.text}</h4>
            <h4 className={styles.itemName}>{card.price}</h4>
            <h4 className={styles.discount}>{card.discount}</h4>
          </div>
        ))}
      </div>
    );
}

export default Item;