import jwtDecode from "jwt-decode"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryListings from "./CategoryListings";
import styles from './ListingsPage.module.css'
import Banner from "./Banner";
import Navbar from "../reusable/Navbar";
import NewSection from "./NewSection";
import SearchIcon from "../search/SearchIcon";


const ListingsPage = () => {
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState('Stranger');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const token = localStorage.getItem("userAuthToken");

    const getUserInfoFromToken = () => {
        if (token) {
            const userInfo = jwtDecode(token);
            console.log(userInfo);
            setUserId(userInfo.user.id);
            setEmail(userInfo.user.email);
            setUserName(userInfo.user.username)
            return userInfo;
        } else {
            navigate('/auth');
        }
    }

    useEffect(() => {
        getUserInfoFromToken()
    }, []);

    const getHomeListings = (id) => {
        //This will take the user's id, and then make a call to the backend API. 
        //It will make multiple get requests for the notifications, messages, categories that's marked as featured, with their items, New listings, which are listings created less than 3 weeks. 
        //It will fetch these plus associated items, then store them to state.

        //Category Listings will take in an array of Categories, and the Categories will have an array of items. New Listings will have items made less than 3 years ago.
    }


    return (
        <div id="HomeListings" className={styles.HomeListings}>
            <SearchIcon />
            <Banner />
            <CategoryListings/>
            <NewSection />
            <Navbar />
        </div>
    )
}

export default ListingsPage; 