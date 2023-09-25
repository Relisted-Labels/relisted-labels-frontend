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
      <h1>Featured Products</h1>

      <div>
      {featuredProducts.map((feature, index) => (
        <img src={feature.productImg} alt="" key={index} />
      ))}
      </div>
    </div>
  )
}

export default FeaturePage
