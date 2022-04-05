import React from 'react';

const Instument = (props) => {
    const {review, name, ratings, picture} = props.instument;
    return (
        <div>
            <h2 className="text-2xl text-slate-700">{name}</h2>
            <p>{review}</p>
            <p><small>Ratings: {ratings} ⭐</small></p>
        </div>
    );
};

export default Instument;