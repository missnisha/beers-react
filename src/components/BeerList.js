
import React, { useState, useEffect } from 'react';
import BeersLogic from '../logic/BeersLogic'
import BeerListItem from '../components/BeerListItem'
const BeerList = () => {
    const [beers, setBeers] = useState([]);
    const getBeers = async () => {
        const beers = await BeersLogic.getBeers(1,12);
        setBeers(beers);
    }
    useEffect(() => {
        getBeers(beers)
    })
    return (
        <div>
            {beers.map(beer =>{
                return <BeerListItem item={beer} key={beer.id}/>
            })}
        </div>
    )
}
export default BeerList