import React from 'react';
import Header from '../components/Header';
import Pagination from '../components/Pagination'
import SearchBeers from '../components/SearchBeers'
import BeerList from '../components/BeerList';

const Home = () => {
    return (
        <>  
        <Header />
        <BeerList />
        <Pagination />
        <SearchBeers />
        </>  
    )
}

export default Home;