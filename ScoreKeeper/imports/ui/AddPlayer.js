import React from 'react';
import {Players} from './../api/players';
import PropTypes from 'prop-types';

// If you want to use the this.prop.whateverproperty variable,
// you have to preserve binding in the onSubmit function <form onSubmit={this.handleSubmit.bind(this)}>
// this lets you use  this.props.score in the Generic Functions created in the component

export default class AddPlayer extends React.Component {
	handleSubmit(e){
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
	render() {
		return (
			<div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name"/>
          <button>Add Player</button>
        </form>
			</div>
		);
	}
}
