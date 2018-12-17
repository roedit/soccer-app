import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "../imports/ui/App"
import NewPlayer from "../imports/ui/New-player";
import Lost from "../imports/ui/Lost";

Meteor.startup(() => {
	render((
		<Router>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/new-player" component={NewPlayer} />
				<Route component={Lost} />
			</Switch>
		</Router>
	), document.getElementById("render-target"));
});