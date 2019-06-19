import React, { Fragment, Component } from 'react';
import { Typography, Divider } from '@material-ui/core';
import ImgPopout from '../util/ImgPopout';
import ImageLayout from '../util/ImageLayout';
const attackImage1 = require('../assets/screen-shots/attack-1.png');
const imagesToDisplay = [attackImage1];

class Auth extends Component {
	state = {
		isPopupShown: false,
		imageToShow: ''
	};
	setImageToDisplay = imageToDisaplay => {
		this.setState({ isPopupShown: true, imageToShow: imageToDisaplay });
	};
	handleClose = () => this.setState({ isPopupShown: false });
	render() {
		return (
			<Fragment>
				<div>
					<Typography variant="h6">
						As it stands, there is no authentication being done in this application.
					</Typography>
					<Typography variant="body1" className="bottom-spacer">
						Any form of auth is being done strictly from local storage. There is{' '}
						<strong className="code-block">NO</strong> way to log in on your own.
					</Typography>
					<Typography variant="h6" className="spacer">
						The Problem
					</Typography>
					<Typography variant="body1" className="">
						The way this application is structures is as follows:
						<br />
					</Typography>
					<Typography variant="body1" component="div" className="">
						<ul>
							<li>
								Users initially come to a splash page in which they are asked for an email address
							</li>
							<li>
								Upon entering an email (could be <em className="code-block">a@b.asaa</em> ), they
								are given a token which grants access to several endpoints, including a pass-through
								to Unity.
							</li>
							<li>
								This token does expire, however, the UI is configured to automatically refresh the
								token. It does this without prompt from the user.
							</li>
							<li>After getting this token, near unrestricted access is granted.</li>
							<li>
								It opens up a tunnel straight to Unity, and by extension the 3rd party carriers.
							</li>
						</ul>
					</Typography>
					<Typography variant="h6" className="spacer">
						Potential Solutions
					</Typography>
					<Typography variant="body1" component="div" className="spacer bottom-spacer">
						A clearer understanding of the Business Requriements is needed. We have ideas about
						fixing what is in place, but if thats the intent, then we don't need to fix anything.
						<br />
					</Typography>
				</div>
				<Typography variant="h6">Examples</Typography>
				<Divider className="divider" />
				<ImageLayout
					imageHeight="100"
					imagesToDisplay={imagesToDisplay}
					altText="attack proof"
					setImageToDisplay={this.setImageToDisplay}
				/>
				<ImgPopout
					isPopupShown={this.state.isPopupShown}
					handleClose={this.handleClose}
					imageToShow={this.state.imageToShow}
					altText="bad media query"
					title="Improper Media Query"
					optionalClass=""
				/>
			</Fragment>
		);
	}
}

export default Auth;
