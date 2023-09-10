import jwtDecode from "jwt-decode"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

    return (
        <p>Hello, {userName}.</p>
    )
}

export default ListingsPage;