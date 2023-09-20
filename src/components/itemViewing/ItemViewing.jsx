import Styles from './ItemViewing.module.css'
import ItemImg from '../../assets/itemImg.png'

const ItemViewing = () => {
  return (
    <div className={Styles.container}>
      <img src={ItemImg}/>

      <div className={Styles.description}>
        <div className={Styles.price}>
            <h2>
                Curve Blazer
            </h2>

            <p>
                #9,000
            </p>
        </div>

        <div className={Styles.rating}>
            <img src="" alt="" />

            <div className={Styles.text}>
                <h3>Mrs Bridget</h3>
                <p></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ItemViewing
