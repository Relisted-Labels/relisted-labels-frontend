import Styles from './ItemViewing.module.css'
import ItemImg from '../../assets/itemImg.png'
import pfp from '../../assets/pfp.png'
import MoreLike from '../reusable/MoreLike.jsx'
import {AiFillStar, AiOutlineArrowRight} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'

const ItemViewing = () => {
  return (
    <div className={Styles.container}>
      <RxCross2 className={Styles.cancel}/>
      <img src={ItemImg}/>

      <div className={Styles.description}>
        <div className={Styles.price}>
            <h2>Curve Blazer</h2>
            <p>#9,000</p>
        </div>

        <div className={Styles.rating}>
            <img src={pfp} alt="" />

            <div className={Styles.text}>
                <h3>Mrs seller</h3>
                <p>
                    <AiFillStar className={Styles.icon}/>
                    <AiFillStar className={Styles.icon}/>
                    <AiFillStar className={Styles.icon}/>
                    <AiFillStar className={Styles.icon}/>
                    <AiFillStar className={Styles.icon}/>
                    <AiFillStar className={Styles.icon}/>
                </p>
            </div>
        </div>

        <div className={Styles.attribute}>
          <p>
            A white elegant blazer to make you look sharp and and cute with an extra side of seriousness for office wear
          </p>
            <ul>
              <li>
                <p>Product type</p>

                <h5>Suit</h5>
              </li>
              <li>
                <p>Color</p>

                <h5>White</h5>
              </li>
              <li>
                <p>Weekly Price</p>

                <h5>#10,000</h5>
              </li>
              <li>
              <p>Daily Price</p>

                <h5>#3,000</h5>
              </li>
            </ul>
        </div>
      </div>

      <div className={Styles.more}>
        <h3>More like this <span><AiOutlineArrowRight className={Styles.arrow}/></span></h3>

        <div className={Styles.slide}>
        <MoreLike />
        <MoreLike />
        <MoreLike />
        <MoreLike />

        </div>
        
        <div>
        </div>
      </div>

      <div className={Styles.cart}>
        <button>Add To Cart</button>
      </div>
    </div>
  )
}

export default ItemViewing
