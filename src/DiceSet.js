import React from 'react';
import Die from './Die.js';

function DiceSet({ diceSet }) {
	return (
		<div className="dice-line">
			{diceSet.map((die) => {
				return <Die die={die} key={die.id} />;
			})}
		</div>
	);
}

export default DiceSet;