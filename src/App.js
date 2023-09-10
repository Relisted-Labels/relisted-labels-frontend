import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/homePage/HomePage'; // Adjust the path as needed
import AuthPage from './components/authPage/AuthPage';
import ListingsPage from './components/listingsPage/ListingsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/auth" element={<AuthPage/>} />
        <Route exact path="/listings" element={<ListingsPage/>} />
        {/* Add more routes here if needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
