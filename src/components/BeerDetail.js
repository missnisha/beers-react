/* import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import '../styles.css';

const BeerDetail = (props) => {
    const { beerId } = useParams();
    let history = useHistory();

    const goBack = () => {
        history.goBack();
    };
     
    const { item } = props;
    const { name, tagline, description, first_brewed, image_url, ingredients} = item;
    const imgStyles = { backgroundImage: `url('${image_url}')`}
    return (
        <div className="beers">
            <div className="beer-item">
                <div className="beer-image" style={imgStyles}></div>
                <div className="beer-item-content">
                    <h2>{name}</h2>
                    <p>{tagline}</p>
                    <hr />
                    <p>{description}</p>
                    <hr />
                    <p>{ingredients}</p>
                    <p>{`First brewed in: ${first_brewed}`}</p>
                </div>
            </div>
        </div>
    )
} 
export default BeerDetail; */