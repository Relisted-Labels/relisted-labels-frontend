import React from 'react'
import Styles from './MoreLike.module.css'
import Image from '../../assets/moreLike.png'

const MoreLike = () => {
  return (
    <div className={Styles.container}>
      <img src={Image} alt="" />

      <h3>Blue Jumpsuit</h3>
      <p>Office fashion</p>
    </div>
  )
}

export default MoreLike
