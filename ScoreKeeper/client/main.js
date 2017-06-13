import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer.js';

const renderPlayers = (playersList) => {
	return playersList.map((players) => {
		return (
			<p key={players._id}>
				{players.name} has {players.score} points(s).
				<button onClick={() => Players.update(players._id, {$inc: {score: 1}})}>+1</button>
				<button onClick={() => Players.update(players._id, {$inc: {score: -1}})}>-1</button>
				<button onClick={() => Players.remove(players._id)}>X</button>
			</p>
		);
	});
};
const handleSubmit = (e) => {
	let playerName = e.target.playerName.value;

	e.preventDefault();

	if(playerName) {
		e.target.playerName.value = '';
		Players.insert({
	    name: playerName,
	    score: 0
	  });
	}
}

Meteor.startup(() => {
	Tracker.autorun(() => {
		let players = Players.find().fetch();
		let title = 'Score Keep'
		let jsx = (
		<div>
			<TitleBar/>
			{renderPlayers(players)}
			<AddPlayer/>
		</div>
	  );

		ReactDOM.render(jsx, document.getElementById('app'));
	});


});
