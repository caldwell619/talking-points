import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import ImgPopout from '../../util/ImgPopout';
const camera = require('../../assets/screen-shots/camera.png');
const ux1 = require('../../assets/videos/ux-1.mov');

class FollowThroughContent extends Component {
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
						From our perspective, there is little attention given to detail.
					</Typography>
					<Typography variant="body1" className="bottom-spacer">
						Several ascpects of Bacon Loan Pay have been simply copied and
						pasted into the architecture of this application
						<br />
						This wouldn't be a problem, save for the fact this app is not using
						them. Increasing the size of the application and resource
						consumption on AWS slows performance and increases cost.
						<br />
					</Typography>
					<Typography variant="h6" className="spacer">
						The Problem
					</Typography>
					<Typography variant="body1" className="bottom-spacer">
						This application is incomplete. Errors in the API are handled with
						native browser alerts with ambigous error messages.
						<br />
						<br />
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
							onClick={() =>
								this.setState({ isPopoutShown: true, imageToShow: camera })
							}
						/>
						<video src={ux1} width="480" controls />;
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

export default FollowThroughContent;
