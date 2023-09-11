import { useState, useEffect } from "react";
import styles from './Item.module.css'
import Blazer from '../../assets/Blazer.avif'

const Item = () => {
    
    return (
        <div className={styles.item}>
            <img src={Blazer} alt="Black woman on Blazer" className={styles.itemImage}/>
            <h4 className={styles.itemName}>Office Blazer</h4>
            <p>N8000</p>
        </div>
    )
}

export default Item;