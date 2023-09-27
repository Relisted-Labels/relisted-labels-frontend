import React from 'react'
import style from './feature.module.css'
import image from '../../assets/featureProduct.png'
import group from '../../assets/Group-feature.png'
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
    <>
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

    <div className={style.groupCont}>
      <h1>BUY AND RENT YOUR CLOTHES AT AN AFFORDABLE PRICE</h1>

        <img src={group} alt="" />
    </div>
    </>
  )
}

export default FeaturePage
