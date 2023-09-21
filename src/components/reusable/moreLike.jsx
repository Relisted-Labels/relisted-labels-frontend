import React from 'react'
import Styles from './moreLike.module.css'
import Image from '../../assets/moreLike.png'

const moreLike = () => {
  return (
    <div className={Styles.container}>
      <img src={Image} alt="" />

      {/* <h3>{productName}</h3>
      <p>{category}</p> */}
    </div>
  )
}

export default moreLike
