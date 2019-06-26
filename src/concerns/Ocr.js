import React, { Component, Fragment } from 'react';
import { Typography, Divider } from '@material-ui/core';
import successfulVin1 from '../assets/screen-shots/success-vin_1.png';
import successfulVin2 from '../assets/screen-shots/successful-vin_2.jpg';
import successfulVin3 from '../assets/screen-shots/successful-vin_3.png';
import successfulVin5 from '../assets/screen-shots/successful-vin_5.png';
import unsuccessfulVin1 from '../assets/screen-shots/unsuccessful-vin_1.jpg';
import unsuccessfulVin2 from '../assets/screen-shots/unsuccessful-vin_1.png';
import unsuccessfulVin3 from '../assets/screen-shots/unsuccessful-vin_2.jpg';
import unsuccessfulVin4 from '../assets/screen-shots/unsuccessful-vin_3.jpeg';
import unsuccessfulVin5 from '../assets/screen-shots/unsuccessful-vin_4.png';
import failedVideo from '../assets/videos/failed-vin.mov';
import ImgPopout from '../util/ImgPopout';
import { fail } from 'assert';
const successfulImages = [successfulVin1, successfulVin2, successfulVin3, successfulVin5];
const unsuccessfulImages = [
	unsuccessfulVin1,
	unsuccessfulVin2,
	unsuccessfulVin3,
	unsuccessfulVin4,
	unsuccessfulVin5
];

class Ocr extends Component {
	state = {
		isPopupShown: false,
		imageToShow: '',
		isSideBySideShown: false,
		sideBySideImg1: '',
		sideBySideImg2: ''
	};
	handleClose = () => this.setState({ isPopupShown: false, isSideBySideShown: false });

	updateImageToShow = imgToShow => this.setState({ imageToShow: imgToShow });

	render() {
		return (
			<Fragment>
				<div>
					<Typography variant="h6">The process to get a VIN from a picture</Typography>
					<Divider className="divider" />
					<Typography variant="body1" className="spacer bottom-spacer">
						Certain pictures do not yield a VIN, even through they contain one.
						<br />
						<br />A trend that we found is that images with a lot of text, to include the VIN,
						failed. However when the same image was cropped to only include the VIN, it worked.{' '}
						<br />
						<br />
						Another trend is noted where the{' '}
						<em>same image sent to the OCR service has passed an failed, on different occasions</em>
						.
						<br />
						<br />
						We need to let users know how to best format the image for success.
					</Typography>
					<Typography variant="h6">Successful Pictures</Typography>
					<Divider className="divider" />
					<Typography variant="body1" />
					<div className="non-click-media-cont">
						{successfulImages.map((image, index) => (
							<img key={index} src={image} alt="low effort" height="50" />
						))}
					</div>
					<Typography variant="h6">Unsuccessful Pictures</Typography>
					<Divider className="divider" />
					<div className="media-cont">
						{unsuccessfulImages.map((image, index) => (
							<img
								key={index}
								src={image}
								alt="low effort"
								height="50"
								onClick={() => this.setState({ isPopupShown: true, imageToShow: image })}
							/>
						))}
					</div>
					<Typography variant="h6">Failed Vin Video</Typography>
					<Divider className="divider" />
					<Typography variant="body1">
						This video is an attempt at recreating the successful submission of a trimmed vin.
						However, this image is now rejected by the service. It was previously accepted, and thus
						creates an uncertainty of what the intended format should be.
					</Typography>
					<div className="media-cont">
						<video src={failedVideo} height="200" controls />
					</div>
				</div>
				<ImgPopout
					{...this.state}
					handleClose={this.handleClose}
					altText="poor design"
					title="Unsuccessful Vin Attempt"
				/>
			</Fragment>
		);
	}
}

export default Ocr;
