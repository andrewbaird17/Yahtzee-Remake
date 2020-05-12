import React from 'react';
import Die from './Die.js';

function DiceSet(props) {
	return (
		<div>
			{props.dice.map((item) => {
				console.log(item);
				return <Die key={item.id} {...props.dice} />;
			})}
		</div>
	);
}

export default DiceSet;
