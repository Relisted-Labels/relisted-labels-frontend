import {useState} from "react";
import styles from "./Newsection.module.css";
import NewSectionCard from "./NewSectionCard"; 
const NewSection = () => {
  const [visibleCards, setVisibleCards] = useState(6);
  const showMoreCards = () => {
    setVisibleCards(visibleCards + 2);
  };
    
 const cards = [
   {
     productImg: "./image/listingImg.png",
     text: "Dress, UK 12",
     altText: "Dress, UK 12",
     itemName: "Glamorous",
     price: "Rent from E21",
     discount: "PRP E90",
   },
   {
     productImg: "./image/listingImg.png",
     text: "Dress, UK 12",
     altText: "Dress, UK 12",
     itemName: "Glamorous",
     price: "Rent from E21",
     discount: "PRP E90",
   },
    {
     productImg: "./image/listingImg.png",
     text: "Dress, UK 12",
     altText: "Dress, UK 12",
     itemName: "Glamorous",
     price: "Rent from E21",
     discount: "PRP E90",
   },
    {
     productImg: "./image/listingImg.png",
     text: "Dress, UK 12",
     altText: "Dress, UK 12",
     itemName: "Glamorous",
     price: "Rent from E21",
     discount: "PRP E90",
   },
   {
     productImg: "./image/listingImg.png",
     text: "Dress, UK 12",
     altText: "Dress, UK 12",
     itemName: "Glamorous",
     price: "Rent from E21",
     discount: "PRP E90",
   },
    {
     productImg: "./image/listingImg.png",
     text: "Dress, UK 12",
     altText: "Dress, UK 12",
     itemName: "Glamorous",
     price: "Rent from E21",
     discount: "PRP E90",
   },
    {
     productImg: "./image/listingImg.png",
     text: "Dress, UK 12",
     altText: "Dress, UK 12",
     itemName: "Glamorous",
     price: "Rent from E21",
     discount: "PRP E90",
   },
      {
     productImg: "./image/listingImg.png",
     text: "Dress, UK 12",
     altText: "Dress, UK 12",
     itemName: "Glamorous",
     price: "Rent from E21",
     discount: "PRP E90",
   },
      {
     productImg: "./image/listingImg.png",
     text: "Dress, UK 12",
     altText: "Dress, UK 12",
     itemName: "Glamorous",
     price: "Rent from E21",
     discount: "PRP E90",
   },
      {
     productImg: "./image/listingImg.png",
     text: "Dress, UK 12",
     altText: "Dress, UK 12",
     itemName: "Glamorous",
     price: "Rent from E21",
     discount: "PRP E90",
   },
   {
     productImg: "./image/listingImg.png",
     text: "Dress, UK 12",
     altText: "Dress, UK 12",
     itemName: "Glamorous",
     price: "Rent from E21",
     discount: "PRP E90",
   },
      {
     productImg: "./image/listingImg.png",
     text: "Dress, UK 12",
     altText: "Dress, UK 12",
     itemName: "Glamorous",
     price: "Rent from E21",
     discount: "PRP E90",
   },
      {
     productImg: "./image/listingImg.png",
     text: "Dress, UK 12",
     altText: "Dress, UK 12",
     itemName: "Glamorous",
     price: "Rent from E21",
     discount: "PRP E90",
   },
      {
     productImg: "./image/listingImg.png",
     text: "Dress, UK 12",
     altText: "Dress, UK 12",
     itemName: "Glamorous",
     price: "Rent from E21",
     discount: "PRP E90",
   },
 ];

  return (
    <div className={styles.Section}>
      <h2>New In</h2>
      <div className={styles.cardListings}>
        {cards.slice(0, visibleCards).map((card, index) => (
          <NewSectionCard
            key={index} 
            productImg={card.productImg}
            altText={card.altText}
            text={card.text}
            discount={card.discount}
            itemName={card.itemName}
            price={card.price}
          />
        ))}
       
      </div>
        {visibleCards < cards.length && (
        <button className={styles.showMoreButton} onClick={showMoreCards}>Show More</button>
      )}
    </div>
  );
};

export default NewSection;
