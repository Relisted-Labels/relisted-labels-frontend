import { useState, useEffect } from "react";
import styles from './Item.module.css'
import Blazer from '../../assets/Blazer.png'
import Trend from '../../assets/trend.png'
import Trendd from '../../assets/trendd.png'
import Trenddd from '../../assets/trenddd.png'

const Item = () => {

    const cards = [
      {
        productImg: Trend,
        text: "Dress, UK 12",
        altText: "Dress, UK 12",
        itemName: "Realisation",
        price: "Rent from E21",
        discount: "PRP E90",
      },
      {
        productImg: Trendd,
        text: "Dress, UK 12",
        altText: "Dress, UK 12",
        itemName: "Realisation",
        price: "Rent from E21",
        discount: "PRP E90",
      },
      {
        productImg: Trenddd,
        text: "Dress, UK 12",
        altText: "Dress, UK 12",
        itemName: "Realisation",
        price: "Rent from E21",
        discount: "PRP E90",
      },
      {
        productImg: Blazer,
        text: "Dress, UK 12",
        altText: "Dress, UK 12",
        itemName: "Realisation",
        price: "Rent from E21",
        discount: "PRP E90",
      },
      {
        productImg: Trend,
        text: "Dress, UK 12",
        altText: "Dress, UK 12",
        itemName: "Realisation",
        price: "Rent from E21",
        discount: "PRP E90",
      },
      {
        productImg: Trendd,
        text: "Dress, UK 12",
        altText: "Dress, UK 12",
        itemName: "Realisation",
        price: "Rent from E21",
        discount: "PRP E90",
      },
      {
        productImg: Trenddd,
        text: "Dress, UK 12",
        altText: "Dress, UK 12",
        itemName: "Realisation",
        price: "Rent from E21",
        discount: "PRP E90",
      },
      {
        productImg: Blazer,
        text: "Dress, UK 12",
        altText: "Dress, UK 12",
        itemName: "Realisation",
        price: "Rent from E21",
        discount: "PRP E90",
      },
    ];
    
    return (
      <div className={styles.container}>
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