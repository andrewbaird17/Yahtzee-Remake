import React, { useState } from 'react';

// have traditional images for a die face?
// Die states: holdRoll, saveValue, Show HOLD above die if being held

function Die(die) {
	const [value, setValue] = useState(0);
	const [hold, setHold] = useState('false');

	function handleClickHold(event) {
		event.preventDefault();
		setHold((prevHold) => (prevHold = !prevHold));
		setValue((prevValue) => (prevValue = die.value));
	}
	return (
		<div className="dice-set">
			<div className="die-appearance">
				<h1>{value}</h1>
			</div>
			<div className={`die ${hold ? 'hold' : ''}`}>
				<h3>{hold}</h3>
			</div>
			<button onClick={handleClickHold}>Change Hold Status?</button>
		</div>
	);
}

export default Die;
