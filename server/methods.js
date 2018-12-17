import { Meteor } from "meteor/meteor";
import { Players } from "../imports/api/players";

Meteor.methods({
	insertPlayer(player) {
		Players.insert(player);
	},
	printLog() {
		console.log("Has to be printed!!");
	}
})