import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Players } from "../api/players";
import { Meteor } from "meteor/meteor";

class NewPlayer extends Component {
	submitPlayer(event) {
		let player = {
			name: this.refs.name.value,
			team: this.refs.team.value,
			ballManipulation: this.refs.ballManipulation.value,
			kickingAbilities:this.refs.kickingAbilities.value,
			passingAbilities: this.refs.passingAbilities.value,
			duelTackling: this.refs.duelTackling.value,
			fieldCoverage: this.refs.fieldCoverage.value,
			blockingAbilities: this.refs.blockingAbilities.value,
			gameStrategy: this.refs.gameStrategy.value,
			playmakingRisks: this.refs.playmakingRisks.value,
			notes: this.refs.notes.value,
			createdAt: new Date(),
			owner: Meteor.userId()
		};

        Meteor.call("printLog");
		/*Meteor.call("printLog", player, (error) => {
			if(error) {
				alert("Oups something went wrong: " + error.reason);
			} else {
				console.log("Player saved with success");

				this.props.history.push("/");
			}
		})*/
	}

	render() {
		return(
			<div className="row">
				<form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
					<h3>Add a new player</h3>

					<div className="row">
						<div className="input-field col s6">
							<input placeholder="Name" ref="name" type="text" className="validate" />
						</div>
						<div className="input-field col s6">
							<input placeholder="Team" ref="team" type="text" className="validate" />
						</div>
					</div>

					<div className="row">
						<div className="col s6">
							<h5>Ball manipulation</h5>
							<select className="browser-default" ref="ballManipulation">
								<option value="0">0 - No skills</option>
								<option value="1">1 - We are even</option>
								<option value="2">2 - Plays good</option>
								<option value="3">3 - Want him in my team</option>
							</select>
						</div>
						<div className="col s6">
							<h5>Kicking abilities</h5>
							<select className="browser-default" ref="kickingAbilities">
								<option value="0">0 - No skills</option>
								<option value="1">1 - We are even</option>
								<option value="2">2 - Plays good</option>
								<option value="3">3 - Want him in my team</option>
							</select>
						</div>
					</div>

					<div className="row">
						<div className="col s6">
							<h5>Passing abilities</h5>
							<select className="browser-default" ref="passingAbilities">
								<option value="0">0 - No skills</option>
								<option value="1">1 - We are even</option>
								<option value="2">2 - Plays good</option>
								<option value="3">3 - Want him in my team</option>
							</select>
						</div>
						<div className="col s6">
							<h5>Duel Tackling</h5>
							<select className="browser-default" ref="duelTackling">
								<option value="0">0 - No skills</option>
								<option value="1">1 - We are even</option>
								<option value="2">2 - Plays good</option>
								<option value="3">3 - Want him in my team</option>
							</select>
						</div>
					</div>

					<div className="row">
						<div className="col s6">
							<h5>Field coverage</h5>
							<select className="browser-default" ref="fieldCoverage">
								<option value="0">0 - No skills</option>
								<option value="1">1 - We are even</option>
								<option value="2">2 - Plays good</option>
								<option value="3">3 - Want him in my team</option>
							</select>
						</div>
						<div className="col s6">
							<h5>Blocking abiltiies</h5>
							<select className="browser-default" ref="blockingAbilities">
								<option value="0">0 - No skills</option>
								<option value="1">1 - We are even</option>
								<option value="2">2 - Plays good</option>
								<option value="3">3 - Want him in my team</option>
							</select>
						</div>
					</div>

					<div className="row">
						<div className="col s6">
							<h5>Game strategy</h5>
							<select className="browser-default" ref="gameStrategy">
								<option value="0">0 - No skills</option>
								<option value="1">1 - We are even</option>
								<option value="2">2 - Plays good</option>
								<option value="3">3 - Want him in my team</option>
							</select>
						</div>
						<div className="col s6">
							<h5>Playmaking risks</h5>
							<select className="browser-default" ref="playmakingRisks">
								<option value="0">0 - No skills</option>
								<option value="1">1 - We are even</option>
								<option value="2">2 - Plays good</option>
								<option value="3">3 - Want him in my team</option>
							</select>
						</div>
					</div>

					<div className="row">
						<div className="input-field col s6">
							<textarea placeholder="notes" ref="notes"className="materialize-textarea" />
						</div>
						<div className="input-field col s6">
							<button className="btn waves-effect waves-light" type="submit" name="action">
								Submit
								<i className="material-icons right">send</i>
							</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default withRouter(NewPlayer);