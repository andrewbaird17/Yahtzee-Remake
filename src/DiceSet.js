import React from 'react';
import Die from './Die.js';

function DiceSet({ dice }) {
	return (
		<div>
			{dice.map((el) => {
				console.log(el);
				return <Die die={el} key={el.id} {...dice} />;
			})}
		</div>
	);
}

export default DiceSet;
