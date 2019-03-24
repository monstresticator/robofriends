import React from 'react';

// component function with destructured properties
const Card = ({ id, name, nickname, motto }) => {
	return (
	// This is JSX not HTML
       <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
          <img src={`https://robohash.org/${id}?100x100`} alt='robots' />
          <div>
             <h2>{name}</h2>
             <p>Alias: {nickname}</p>
             <p>Motto: {motto}</p>
          </div>
       </div>
    );
}

export default Card;