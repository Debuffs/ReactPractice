import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

const renderPlayers = function (playersList) {
	//let numbers = [{val: 99}, {val: 2}, {val: 3}, {val:281203}];

	return newNumbers = playersList.map(function (players) {
		return <p key={players._id}>{players.name} has {players.score} points(s).</p>;
	});
};

const handleSubmit = function (e) {
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

Meteor.startup(function () {

	Tracker.autorun(function() {
		let players = Players.find().fetch();
		let title = 'Score Keep'
		let name = 'Chris';
		let jsx = (
		<div>
			<h1>{title}</h1>
			<p>Hello {name}</p>
			<p>This is my second</p>
			{renderPlayers(players)}
			<form onSubmit={handleSubmit}>
				<input type="text" name="playerName" placeholder="Player name"/>
				<button>Add Player</button>
			</form>
		</div>);

		ReactDOM.render(jsx, document.getElementById('app'));
	});


});
