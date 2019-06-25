import React, { Component, Fragment } from 'react';
import { Typography, Divider } from '@material-ui/core';
import ImgPopout from '../../util/ImgPopout';
const poorDesign1 = require('../../assets/screen-shots/follow-1.png');
const poorDesign2 = require('../../assets/screen-shots/follow-2.png');
const poorDesign3 = require('../../assets/screen-shots/follow-3.png');
const poorDesign4 = require('../../assets/screen-shots/favicon.png');
const poorDesign5 = require('../../assets/screen-shots/follow-4.png');
const poorDesignImages = [poorDesign1, poorDesign2, poorDesign3, poorDesign5];

class NativeAlerts extends Component {
	state = {
		isPopupShown: false,
		imageToShow: '',
		isSideBySideShown: false
	};

	handleClose = () => this.setState({ isPopupShown: false, isSideBySideShown: false });

	updateImageToShow = imgToShow => this.setState({ imageToShow: imgToShow });

	render() {
		return (
			<Fragment>
				<div>
					<Typography variant="h6" className="spacer">
						Every error message comes in the form of a native browser alert.
					</Typography>
					<Typography variant="body1" className="bottom-spacer">
						Messages are ambiguous, and the alert window cause disruptions to the User Experience.
					</Typography>
					<div>
						<Typography variant="h6" className="spacer">
							Examples
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
					</div>
				</div>
				<ImgPopout
					{...this.state}
					handleClose={this.handleClose}
					altText="poor design"
					title="Ambiguous, Non-Standard Error Messages"
				/>
			</Fragment>
		);
	}
}

export default NativeAlerts;
