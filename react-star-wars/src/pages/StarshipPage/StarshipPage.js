import React from 'react';

const StarshipPage = (props) => {
    var starship = props.getStarship(props.match.params.idx);

    return (
        <div className="StarshipPage">

            <h3>STARSHIP NAME: {starship.name}</h3>
            <h3>STARSHIP MODEL: {starship.model}</h3>
            
        </div>
    );

};

export default StarshipPage;