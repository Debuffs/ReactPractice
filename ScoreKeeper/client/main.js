import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
	_id: '1',
	name: 'Lauren',
	score: 99
  }, {
	_id: '2',
	name: 'Chris',
	score: 60
  }, {
	_id: '3',
	name: 'Roy',
	score: 78
}];

const renderPlayers = function (playersList) {
	//let numbers = [{val: 99}, {val: 2}, {val: 3}, {val:281203}];

	return newNumbers = playersList.map(function (players) {
		return <p key={players._id}>{players.name} has {players.score} points(s).</p>;
	});
};

Meteor.startup(function () {
	let title = 'Score Keep'
	let name = 'Chris';
	let jsx = (
	<div>
		<h1>{title}</h1>
		<p>Hello {name}</p>
		<p>This is my second</p>
		{renderPlayers(players)}
	</div>);

	ReactDOM.render(jsx, document.getElementById('app'));
});
