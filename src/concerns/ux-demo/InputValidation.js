import React, { Component, Fragment } from 'react';
import '../../css/Conerns.css';
import { Typography, Divider } from '@material-ui/core';
import ImgPopout from '../../util/ImgPopout';
import validate2 from '../../assets/videos/validate-2.mov';
import validate1 from '../../assets/videos/validate-1.mov';
import validate3 from '../../assets/videos/validate-3.mov';
import inputImage1 from '../../assets/screen-shots/empty_43.png';
import failedZipCode from '../../assets/screen-shots/invalid-input_1.png';
const emptyFileCollection = [inputImage1, failedZipCode];

class InputValidation extends Component {
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
					<Typography variant="h6">
						In several instances, there is no validation before sending a request to the API.
					</Typography>
					<Typography variant="body1" className="bottom-spacer">
						<a
							href="https://baianat.github.io/vee-validate/"
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: 'blue' }}
						>
							Vee Validate
						</a>{' '}
						is in use for Bacon Loan Pay to enforce rudamentary validation of input before wasting
						resources with an API.
					</Typography>
					<div>
						<Typography variant="h6" className="bottom-spacer">
							Video Examples
						</Typography>
					</div>
					<div className="media-cont">
						<video src={validate1} width="480" height="200" controls />;
						<video src={validate2} width="480" height="200" controls />;
						<video src={validate3} width="480" height="200" controls />
					</div>
					<Divider className="divider" />
					<Typography variant="h6" className="bottom-spacer">
						Screen Shots
					</Typography>
					<div className="media-cont">
						{emptyFileCollection.map((image, index) => (
							<img
								key={index}
								src={image}
								alt="low effort"
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
					title="Request Sent with Empty Input"
				/>
			</Fragment>
		);
	}
}

InputValidation.propTypes = {};

export default InputValidation;
