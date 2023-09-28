import { useState, useEffect } from "react";
import styles from './Category.module.css'
import TrendingItem from "./TrendingItem";

const Category = (props) => {
    
    return (
      <div className={styles.container}>
        <div className={styles.Category}>
          <h2>Trending Items</h2>
          <div className={styles.itemListings}>
            <TrendingItem />
          </div>
        </div>
        <div className={styles.Category}>
          <h2>Wedding Guest</h2>
          <div className={styles.itemListings}>
            <TrendingItem />
          </div>
        </div>
        <div className={styles.Category}>
          <h2>Holiday</h2>
          <div className={styles.itemListings}>
            <TrendingItem />
          </div>
        </div>
        <div className={styles.Category}>
          <h2>Brunch</h2>
          <div className={styles.itemListings}>
            <TrendingItem />
          </div>
        </div>
        <div className={styles.Category}>
          <h2>Dine with me</h2>
          <div className={styles.itemListings}>
            <TrendingItem />
          </div>
        </div>
        <div className={styles.Category}>
          <h2>Aso-ebi</h2>
          <div className={styles.itemListings}>
            <TrendingItem />
          </div>
        </div>
        <div className={styles.Category}>
          <h2>Lounge wear</h2>
          <div className={styles.itemListings}>
            <TrendingItem />
          </div>
        </div>
      </div>
    );
}

export default Category;