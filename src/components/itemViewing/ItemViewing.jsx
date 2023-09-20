import Styles from './ItemViewing.module.css'
import ItemImg from '../../assets/itemImg.png'

const ItemViewing = () => {
  return (
    <div className={Styles.container}>
      <img src={ItemImg}/>
    </div>
  )
}

export default ItemViewing
