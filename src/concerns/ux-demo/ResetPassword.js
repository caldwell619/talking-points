import React, { Component, Fragment } from 'react';
import '../../css/Conerns.css';
// import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import ImgPopout from '../../util/ImgPopout';
const camera = require('../../assets/screen-shots/camera.png');

class ResetPassword extends Component {
	state = {
		isPopoutShown: false,
		imageToShow: ''
	};

	handleClose = () => this.setState({ isPopoutShown: false });

	updateImageToShow = imgToShow => this.setState({ imageToShow: imgToShow });

	render() {
		return (
			<Fragment>
				<div>
					<Typography variant="h6" className="spacer">
						As of today, there are no interfaces in which a user can reset their password
					</Typography>
					<Typography variant="body1" className="bottom-spacer">
						Not only is the endpoint to request a password reset currently broken, there are no
						screens available to do so.
						<br />
						<br />
						Users cannot set their own password, and therefore cannot return after local storage has
						been erased. Many people delete their browsing history, which is configured to erase
						cached data.
						<br />A user would not know their password, and even a support agent wouldn't be able to
						help them since they are stored as encrypted values.
					</Typography>
					<Typography variant="h6" className="spacer">
						The Problem
					</Typography>
					<Typography variant="body1" className="bottom-spacer">
						Users cannot reset their password through the UI. There are no routes declared in the
						source code for any screen to show a link of any kind.
					</Typography>
					<Typography variant="h6" className="spacer">
						The Solution
					</Typography>
					<Typography variant="body1" className="bottom-spacer">
						Implement a link or page for users to go to in order to request a password change.
					</Typography>

					<div>
						<Typography variant="h6" className="bottom-spacer">
							Examples
						</Typography>
					</div>
					<div className="media-cont">
						<img
							src={camera}
							alt="bad media query"
							height="300"
							onClick={() => this.setState({ isPopoutShown: true, imageToShow: camera })}
						/>
					</div>
				</div>
				<ImgPopout
					isOpen={this.state.isPopoutShown}
					handleClose={this.handleClose}
					imgSrc={this.state.imageToShow}
					altText="bad media query"
					title="Improper Media Query"
				/>
			</Fragment>
		);
	}
}

export default ResetPassword;
