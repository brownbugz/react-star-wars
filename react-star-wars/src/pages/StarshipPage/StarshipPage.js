import React from 'react';

const StarshipPage = (props) => {
    var starship = props.getStarship(props.match.params.idx);

    return (
        <div className="StarshipPage">
            {starship ?
                <div>
                    <h3>STARSHIP NAME: {starship.name}</h3>
                    <h3>STARSHIP MODEL: {starship.model}</h3>
                </div>
            :
            <h4>Loading...</h4>
            }
        </div>
    );
};

export default StarshipPage;