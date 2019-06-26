import React, { Fragment, Component } from 'react';
import { Typography, Divider } from '@material-ui/core';
import ImgPopout from '../util/ImgPopout';
import ImageLayout from '../util/ImageLayout';
const splunk1 = require('../assets/screen-shots/attack-1.png');
const splunk2 = require('../assets/screen-shots/splunk_1.png');
const splunk3 = require('../assets/screen-shots/splunk_2.png');
const xray1 = require('../assets/screen-shots/x-ray_1.png');
const xray2 = require('../assets/screen-shots/x-ray_2.png');
const xray3 = require('../assets/screen-shots/x-ray_3.png');
const marketplaceImages = [splunk1, splunk2, splunk3];
const awsImages = [xray1, xray2, xray3];

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
						As it stands, There is <strong className="code-block">NO</strong> way to log in on your
						own.
					</Typography>
					<Typography variant="h6" className="spacer">
						The way this application is structures is as follows:
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
								token after 4 minutes. It does this without prompt from the user.
							</li>
							<li>After getting this token, near unrestricted access is granted.</li>
							<li>
								It opens up a tunnel straight to Marketplace, any services running on the same
								server, and by extension the 3rd party carriers.
							</li>
						</ul>
					</Typography>
					<Typography variant="h6" className="spacer">
						Potential Impact on the Business
					</Typography>
					<Typography variant="body1" component="div" className="spacer bottom-spacer">
						With this vector of attack, a denial of service could prevent users from accessing Buy
						Now, Unity, Portal, and any other services on the server with Marketplace.
						<br />
					</Typography>
					<Typography variant="h6" className="spacer">
						Ways to Improve
					</Typography>
					<Typography variant="body1" component="div" className="spacer bottom-spacer">
						As a minimal effort change, we can enforce a global rate limit AWS from sending more
						than <em>X</em> amount of requests to Marketplace.
						<br />
						<br />
						Another option is to track token use, and not send the request to Marketplace after{' '}
						<em>X</em> amount of requests in a given time period.
					</Typography>
				</div>
				<Typography variant="h6">Requests made to AWS</Typography>
				<Divider className="divider" />
				<ImageLayout
					imageHeight="100"
					imagesToDisplay={awsImages}
					altText="attack proof"
					setImageToDisplay={this.setImageToDisplay}
				/>
				<Typography variant="h6">Requests made to Marketplace from AWS</Typography>
				<Divider className="divider" />
				<ImageLayout
					imageHeight="100"
					imagesToDisplay={marketplaceImages}
					altText="attack proof"
					setImageToDisplay={this.setImageToDisplay}
				/>
				<ImgPopout
					isPopupShown={this.state.isPopupShown}
					handleClose={this.handleClose}
					imageToShow={this.state.imageToShow}
					altText="bad media query"
					title="Improper Media Query"
					// optionalClass="wide-image"
				/>
			</Fragment>
		);
	}
}

export default Auth;
