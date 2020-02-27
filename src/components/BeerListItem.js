import React from 'react';
import '../styles.css';
const BeerListItem = (props) => {
    const { item } = props;
    const { name, tagline, description, first_brewed, image_url} = item;
    const imgStyles = { backgroundImage: `url('${image_url}')`}
    return (
        <div className="beers">
            <div className="beer-item">
                <div className="beer-image" style={imgStyles}></div>
                <div className="beer-item-content">
                    <h2>{`My Beer: ${name}`}</h2>
                    <p>{tagline}</p>
                    <hr />
                    <p>{description}</p>
                    <p>{`First brewed in: ${first_brewed}`}</p>
                </div>
            </div>
        </div>
    )
} 
export default BeerListItem;
 