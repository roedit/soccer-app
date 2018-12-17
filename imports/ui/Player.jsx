import React, { Component } from "react";
import { Card, CardMedia, CardTitle, CardText, CardActions } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import { blue200, blue900 } from "material-ui/styles/colors";

const styles = {
	chip: {
		margin: 4
	},
	wrapper: {
		display: "flex",
		flexWrap: "wrap"
	},
	button: {
		margin: 12
	}
}

class Player extends Component {
	render() {
		return(
			 <Card>
			 	<CardMedia overlay={<CardTitle title="Andrew" subtitle="offence: 12"/>}>
			 		<img src="https://thesefootballtimes.co/wp-content/uploads/2017/10/lewandowsk.jpg" />
			 	</CardMedia>
			 	<CardText>
			 		<div style={styles.wrapper}>
			 			<Chip backgroundColor={blue200}
				 			  style={styles.chip}>
							<Avatar size={32} color={blue200} backgroundColor={blue900}>
								10
							</Avatar>	
							Ball Manipulation
		 			  	</Chip>
			 		</div>
			 	</CardText>
			 	<CardActions></CardActions>
		    </Card>
		)
	}
}

export default Player;