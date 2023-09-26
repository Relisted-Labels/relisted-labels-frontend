import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/homePage/HomePage'; // Adjust the path as needed
import AuthPage from './components/authPage/AuthPage';
import ForgotPassword from './components/authPage/ForgotPassword';
import PasswordReset from './components/authPage/PasswordReset';
import EmailVerification from './components/authPage/EmailVerification';
import ListingsPage from './components/listingsPage/ListingsPage';
import ItemView from './components/itemViewing/ItemViewing'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/auth" element={<AuthPage/>} />
        <Route exact path="/listings" element={<ListingsPage/>} />
        <Route exact path="/viewing" element={<ItemView/>} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/passwordreset" element={<PasswordReset />} />
        <Route exact path="/emailverification" element={<EmailVerification />} />
        {/* Add more routes here if needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
