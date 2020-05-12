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
	const [diceSet, setDiceSet] = useState(() => [
		{ id: 1, value: 0, hold: false },
		{ id: 2, value: 0, hold: false },
		{ id: 3, value: 0, hold: false },
		{ id: 4, value: 0, hold: false },
		{ id: 5, value: 0, hold: false },
	]);
	const [start, setStart] = useState(false);

	function handleStart(event) {
		event.preventDefault();
		setStart(!start);
		setDiceSet(
			diceSet.map((die) => {
				return (die.value = Math.floor(Math.random() * 6) + 1);
			})
		);
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
			<button className="btn" onClick={handleStart}>
				Start Game
			</button>
			<div className="row">
				<div className="main">
					<DiceSet dice={diceSet} />
					<div className="roll-again">
						<h2>Current Roll: {roll} </h2>
						<button className="roll-button" onClick={handleClick}>
							Roll Again
						</button>
					</div>
				</div>
				<div className="scorecard">
					<h4>Scorecard</h4>
					<table>
						<tr>
							<th>Item to Score</th>
							<th>Score</th>
						</tr>
						<tr>
							<td>One's</td>
							<td>0</td>
						</tr>
						<tr>
							<td>Two's</td>
							<td>0</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
}

export default App;
