import React from 'react';
import Die from './Die.js';

function DiceSet({ diceSet }) {
	return (
		<div>
			{diceSet.map((die) => {
				return <Die die={die} key={die.id} {...diceSet} />;
			})}
		</div>
	);
}

export default DiceSet;
