import { Meteor } from "meteor/meteor";
import { Players } from "../imports/api/players";
import "./methods.js";

Meteor.startup(() => {
  Meteor.publish('players', () => {
  	return Players.find({});
  })
});