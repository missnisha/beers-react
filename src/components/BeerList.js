
import React, { useState, useEffect, useCallback } from 'react';
import BeersLogic from '../logic/BeersLogic'
import BeerListItem from '../components/BeerListItem'
const BeerList = ({ page }) => {
    const [beers, setBeers] = useState([]);
    const getBeers = useCallback(async (currentPage) => {
        const beersArray = await BeersLogic.getBeers(currentPage,12);
        setBeers(beersArray);
    }, [])
    useEffect(() => {
        getBeers(page)
    }, [getBeers, page])
    return (
        <div className="beer-father">
            {beers.map(beer =>{
                return <BeerListItem item={beer} key={beer.id}/>
            })}
        </div>
    )
}
export default BeerList