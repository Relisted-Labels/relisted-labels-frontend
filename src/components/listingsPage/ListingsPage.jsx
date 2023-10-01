import jwtDecode from "jwt-decode"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import CategoryListings from "./CategoryListings";
import styles from './ListingsPage.module.css'
import Banner from "./Banner";
import Navbar from "../reusable/Navbar";
import Header from './Header'
import NewCategory from './NewCategory';
// import NewSection from "./NewSection";
import SearchIcon from "../search/SearchIcon";
import Category from "./Category";


const ListingsPage = () => {
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState('Stranger');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

   const token = localStorage.getItem("userAuthToken");
   const storedData = localStorage.getItem("userData");
   const userData = JSON.parse(storedData); 
   const getUserInfoFromToken = () => {
     try {
       if (token) {
         const userInfo = token;
         console.log(userInfo);
         setUserId(userData.userId);
         setEmail(userData.email);
         setUserName(userData.username);
         return userInfo;
       } else {
        setUserName("Guest");
       }
     } catch (error) {
       console.error("Error decoding token:", error);
      //  navigate("/auth"); 
     }
   };

   useEffect(() => {
     getUserInfoFromToken();
   }, []);

    const getHomeListings = (id) => {
        //This will take the user's id, and then make a call to the backend API. 
        //It will make multiple get requests for the notifications, messages, categories that's marked as featured, with their items, New listings, which are listings created less than 3 weeks. 
        //It will fetch these plus associated items, then store them to state.

        //Category Listings will take in an array of Categories, and the Categories will have an array of items. New Listings will have items made less than 3 years ago.
    }


    return (
      <div>
          <Header />
          <Category />
          <NewCategory />
          {/* <NewSection /> */}
         
      </div>
    );
}

export default ListingsPage; 