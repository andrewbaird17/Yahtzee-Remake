import React, { useState } from 'react';
import './App.css';
import DiceSet from './DiceSet.js';

// Need a set of 5 die with values from 1 to 6
// Can roll up to three times and hold any of the die values while rerolling the others the remaining amount of times
/* Scorecard that reflects the current roll of die:
1s,2s,3s,4,5s,6s,Three of a kind, four of a kind, full house, 
small straight (four in a row), large straight(five in a row), chance (sum of all die), yahtzee(five of a kind)
Bonus of 35 points if the 1s thru 6s values add up to 63. 
 */
// Die states: holdRoll, saveValue
// Running tally for the scorecard total, running tally of sub-total, function to check if roll can be applied to selected score area

function App() {
	const [roll, setRoll] = useState(() => 1);
	const diceSet = [0, 0, 0, 0, 0];

	function handleSubmit(event) {
		event.preventDefault();
		console.log(diceSet);
	}

	function handleClick(event) {
		event.preventDefault();
		if (roll === 3) {
			setRoll((prevRoll) => (prevRoll = 1));
		} else {
			setRoll((prevRoll) => prevRoll + 1);
		}
	}
	return (
		<div className="App">
			<h1>Welcome to Yahtzee!</h1>
			<form className="header" onSubmit={handleSubmit}>
				<button className="btn">Start Game</button>
			</form>
			<div className="container">
				<DiceSet diceSet={diceSet} />
				<h2>Current Roll: {roll}</h2>
				<button onClick={handleClick}>Roll Again</button>
			</div>
		</div>
	);
}

export default App;
