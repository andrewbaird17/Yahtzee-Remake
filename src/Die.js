import React, { useState, useEffect, useRef } from 'react';

// have traditional images for a die face?
// Die states: holdRoll, saveValue, Show HOLD above die if being held

function Die(die) {
	const [value, setValue] = useState();
	const [hold, setHold] = useState('false');
	return (
		<div className="dice-set">
			<div className={`die ${hold ? 'hold' : ''}`}>
				<h3>{die.hold}</h3>
			</div>
			<div className="die-appearance">
				// image of die corresponding to die.value would go here
				<h1>{die.value}</h1>
			</div>
		</div>
	);
}

export default Die;
