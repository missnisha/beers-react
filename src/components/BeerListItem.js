import React from 'react';
/* import {
    Link
  } from "react-router-dom"; */
import '../styles.css';
const BeerListItem = (props) => {
    const { item } = props;
    const { name, tagline, description, first_brewed, image_url} = item;
    const imgStyles = { backgroundImage: `url('${image_url}')`}
    return (
        
            <div className="beer-item">
                <div className="beer-image" style={imgStyles}></div>
                <div className="beer-item-content">
                    <h2>{name}</h2>
                    <p>{tagline}</p>
                    <hr />
                    <p>{description}</p>
                    <p>{`First brewed in: ${first_brewed}`}</p>
                 {/*    <Link to="/BeerDetail">Detail</Link> */}
                </div>
            </div> 
        
    )
} 
export default BeerListItem;
 