import React from 'react'
import style from './Feature.module.css'
import image from '../../assets/jumpsuit.png'
const FeaturePage = () => {
    const featuredProducts = [
      {
        productImg: image,
    },
      {
        productImg: image,
    },
      {
        productImg: image,
    },
      {
        productImg: image,
    },
      {
        productImg: image,
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.description}>
        <h1>BUY AND RENT YOUR CLOTHES AT AN AFFORDABLE PRICE</h1>
        <p>Shop now! do not miss this offer</p>
      </div>


      <div className={style.feature}>
      {featuredProducts.map((feature, index) => (
        <img src={feature.productImg} alt="" key={index} className={style.image}/>
      ))}
      </div>
    </div>
  )
}

export default FeaturePage
