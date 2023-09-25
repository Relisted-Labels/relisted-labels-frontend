import React from "react"
import { IoIosArrowUp } from "react-icons/io"
import styles from "./Footer.module.css";

const Footer = () => {

    return (
      <div className={styles.container}>
        <div className={styles.firstcontainer}>
          <div>
            <IoIosArrowUp />
          </div>
          <p>BACK TO TOP</p>
        </div>
        <div className={styles.secondcontainer}>
          <p>CHAT WITH US</p>
          <p>HELP LINE</p>
          <p>CONTACT</p>
          <p>TERMS AND CONDITIONS</p>
        </div>
      </div>
    );
}

export default Footer;