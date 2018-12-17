import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";
import { List } from "material-ui/List";
import Divider from "material-ui/Divider";
import { createContainer } from "meteor/react-meteor-data";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import TeamList from "./Team-list";
import TeamStats from "./Team-stats";
import Player from "./Player";
import AccountsWrapper from "./AccountsWrapper";

// Database
import { Players } from "../api/players";

export class App extends Component {
	constructor(props) {
		super(props);
		// Setting up the state
		this.state = { players: []};
	}

	renderPlayers = () => {
		let playersHtml = [];
		console.log(this.props.players);

		this.props.players.map(player => {
			playersHtml.push(<TeamList key={player._id} player={player} />);
		});

		return playersHtml;
	}

	render() {
		return(
			<MuiThemeProvider>
			<div className="container">
				<AppBar title="Soccer Application"
						iconClassNameRight="muidocs-icon-navigation-expand-more"
						showMenuIconButton={false}>	
					<AccountsWrapper/>
				</AppBar>	
				<div className="row">
					<div className="col s12 m7">
						<h2>Team List</h2>
						<Link to="/new-player" className="waves-effect waves-light btn">Add player</Link>
						<Divider />
						<List>
							{this.renderPlayers()}
						</List>
						<Divider />
					</div>
					<div className="col s12 m5">
						<TeamStats />
					</div>
					<div className="col s12 m5">
						<Player />
					</div>
				</div>
			</div>
			</MuiThemeProvider>
		)
	}
}

App.propTypes = {
	players: PropTypes.array.isRequired
}

export default createContainer(() => {
	Meteor.subscribe("players");

	const userId = Meteor.userId();

	return {
		players: Players.find({ owner: userId }, {sort: {name: 1}}).fetch()
	};
}, App)