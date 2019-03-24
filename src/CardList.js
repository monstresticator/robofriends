import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	// create a loop for the robots
	return (
       <div>
	      { 
	      	robots.map((user, i) => {
		       return (
		          <Card 
		             key={i} 
		             id={robots[i].id} 
		             name={robots[i].name} 
		             nickname={robots[i].nickname} 
		             motto={robots[i].motto}
		          />
		        );
	        })
	      }
	   </div>
	);
}

export default CardList;