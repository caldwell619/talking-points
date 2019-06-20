import React, { Component, Fragment } from 'react';
import { Typography, Divider } from '@material-ui/core';
import ImgPopout from '../../util/ImgPopout';
// Static URL Data

import SideBySide from '../../util/SideBySide';

// Media
const poorDesign1 = require('../../assets/screen-shots/follow-1.png');
const poorDesign2 = require('../../assets/screen-shots/follow-2.png');
const poorDesign3 = require('../../assets/screen-shots/follow-3.png');
const poorDesign4 = require('../../assets/screen-shots/favicon.png');
const poorDesign5 = require('../../assets/screen-shots/follow-4.png');
const ux1 = require('../../assets/videos/ux-1.mov');

const compare1 = require('../../assets/screen-shots/compound-1.png');
const compare2 = require('../../assets/screen-shots/compound-2.png');
const poorDesignImages = [poorDesign1, poorDesign2, poorDesign3, poorDesign5];

class FollowThroughContent extends Component {
	state = {
		isPopupShown: false,
		imageToShow: '',
		isSideBySideShown: false,
	};

	handleClose = () => this.setState({ isPopupShown: false, isSideBySideShown: false });

	updateImageToShow = imgToShow => this.setState({ imageToShow: imgToShow });

	updateSideBySide = () => {
		this.setState({
			isSideBySideShown: true,
			sideBySideImg1: compare1,
			sideBySideImg2: compare2
		});
	};

	render() {
		return (
			<Fragment>
				<div>
					<Typography variant="h6" className="spacer">
						From our perspective, there is little attention given to detail.
					</Typography>
					
					<Typography variant="h6" className="spacer">
						The Problem
					</Typography>
					<Typography variant="body1" className="bottom-spacer">
						This application is incomplete. Errors in the API are handled with native browser alerts
						with ambigous error messages.
						<br />
						<br />
					</Typography>
					<div>
						<Typography variant="h6" className="spacer">
							Low Effort Examples
						</Typography>
					</div>
					<Divider className="divider" />
					<div className="media-cont">
						{poorDesignImages.map((image, index) => (
							<img
								key={index}
								src={image}
								alt="bad media query"
								height="200"
								onClick={() => this.setState({ isPopupShown: true, imageToShow: image })}
							/>
						))}
						<img
							src={poorDesign4}
							alt="bad media query"
							height="100"
							width="200"
							onClick={() => this.setState({ isPopupShown: true, imageToShow: poorDesign4 })}
						/>
						<video src={ux1} width="480" controls />;
					</div>
				</div>
				<ImgPopout
					{...this.state}
					handleClose={this.handleClose}
					altText="poor design"
					title="Poor Design"
				/>
				<div className="side-by-side-cont">
					<SideBySide
						{...this.state}
						handleClose={this.handleClose}
						altText1="Bacon Loan Pay"
						altText2="Buy Now"
						title="Side By Side Comparison of both Apps"
					/>
				</div>
			</Fragment>
		);
	}
}

export default FollowThroughContent;
