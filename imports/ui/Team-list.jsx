import React, { Component } from "react";
import Avatar from "material-ui/Avatar";
import { ListItem } from "material-ui/List"

class TeamList extends Component {
	render() {
		
		console.log("Ok.. we are here!!");
		return(
			<ListItem primaryText={this.props.player.name}
					  leftAvatar={<Avatar src="https://thesefootballtimes.co/wp-content/uploads/2017/10/lewandowsk.jpg"/>}/>
		)
	}
}

export default TeamList;