import react from 'react';
import Header from '../listingsPage/Header';
import ViewProfile from './ViewProfile';
import ViewProfileItems from './ViewProfileItems'
export default function Main() {
    return (
        <>
        <Header />
        <ViewProfile />
        <ViewProfileItems />
        </>
    )
}