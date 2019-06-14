import React, { Component, Fragment } from 'react';
import { Typography, Divider } from '@material-ui/core';
import ImgPopout from '../../util/ImgPopout';
// Static URL Data
import routes from '../../static-data/follow-through-links';
import followThroughLinks from '../../static-data/follow-through-links';

// Media
const poorDesign1 = require('../../assets/screen-shots/follow-1.png');
const poorDesign2 = require('../../assets/screen-shots/follow-2.png');
const poorDesign3 = require('../../assets/screen-shots/follow-3.png');
const poorDesign4 = require('../../assets/screen-shots/favicon.png');
const ux1 = require('../../assets/videos/ux-1.mov');
const emptyFile1 = require('../../assets/screen-shots/empty-1.png');
const emptyFile2 = require('../../assets/screen-shots/empty-2.png');
const emptyFile3 = require('../../assets/screen-shots/empty-3.png');
const emptyFile4 = require('../../assets/screen-shots/empty-4.png');
const emptyFile5 = require('../../assets/screen-shots/empty-5.png');
const emptyFileCollection = [
	emptyFile1,
	emptyFile2,
	emptyFile3,
	emptyFile4,
	emptyFile5
];
const poorDesignImages = [poorDesign1, poorDesign2, poorDesign3];

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
								onClick={() =>
									this.setState({ isPopoutShown: true, imageToShow: image })
								}
							/>
						))}
						<img
							src={poorDesign4}
							alt="bad media query"
							height="100"
							width="200"
							onClick={() =>
								this.setState({ isPopoutShown: true, imageToShow: poorDesign4 })
							}
						/>
						<video src={ux1} width="480" controls />;
					</div>
					<div>
						<Typography variant="h6" className="spacer">
							Unfinished Files on the Source Code
						</Typography>
						<Divider className="divider" />
						<div className="links-cont">
							{followThroughLinks.map(({ url, text }) => (
								<div>
									<a
										href={url}
										rel="noopener noreferrer"
										target="_blank"
										className="blue-link"
									>
										{text}
									</a>
								</div>
							))}
						</div>
					</div>
					<div className="media-cont">
						{emptyFileCollection.map((image, index) => (
							<img
								key={index}
								src={image}
								alt="bad media query"
								height="300"
								onClick={() =>
									this.setState({ isPopoutShown: true, imageToShow: image })
								}
							/>
						))}
					</div>
				</div>
				<ImgPopout
					isOpen={this.state.isPopoutShown}
					handleClose={this.handleClose}
					imgSrc={this.state.imageToShow}
					altText="poor design"
					title="Poor Design"
				/>
			</Fragment>
		);
	}
}

export default FollowThroughContent;
