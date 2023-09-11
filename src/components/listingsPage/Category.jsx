import { useState, useEffect } from "react";
import styles from './Category.module.css'
import Item from "./Item";

const Category = (props) => {
    
    return (
        <div className={styles.Category}>
            <h2>{props.name}</h2>
            <div className={styles.itemListings}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}

export default Category;