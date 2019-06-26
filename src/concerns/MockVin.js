import React, { Component, Fragment } from 'react';
import { Typography, Divider } from '@material-ui/core';
import mockVinPaymentBeta from '../assets/screen-shots/mock-vin-beta.png';
import mockVinPaymentQa from '../assets/screen-shots/mock-vin-qa.png';
import uiFlow from '../assets/videos/mock-payment.mov';
import ImgPopout from '../util/ImgPopout';
const mockVinPaymentImages = [mockVinPaymentBeta, mockVinPaymentQa];

class MockVin extends Component {
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
						You can currently send a payment for a mock vin. Your payment will be taken, and no
						policy will be given in return.
					</Typography>
					<Divider className="divider" />
					<Typography variant="body1" className="spacer bottom-spacer">
						When going through the application, a user can get a mock vin for the purposes of
						quoting. Payment will be accepted for this mock vin, but the policy will be denied due
						to the mock vin.
						<br />
						<br />
						This presents a scenario in which even with a real vin, if for any reason the policy
						request fails, we have taken money and given no policy.
						<Typography variant="body1" className="bottom-spacer">
							In case a Booking Fails which could be due to service availability, carrier
							availability or even an issue with the Booking Object, the current system will accept
							Payment before it submits a Booking. In such a case, Credit Card payments made via
							ProPay or PayPal would need to be reversed instead of reversing the Booking.
						</Typography>
					</Typography>
					<Typography variant="h6" className="spacer">
						Room to Improve
					</Typography>
					<Typography variant="body1" className="spacer bottom-spacer">
						The way forward could include implementing a 3 way handshake, in which a temporary
						policy is created and reserved for the user utilizing the mock vin.
						<br />
						<br />
						The user is then prompted to input the valid vin of the car they wish to purchase a
						product for.
						<br />
						<br />
						After validating the real VIN, the users stored policy will be granted, pending
						successful payment.
					</Typography>
					<Typography variant="h6">Example of a Payment Going Through with a Mock Vin</Typography>
					<Divider className="divider" />
					<Typography variant="body1">
						This recording is on the dev environment, with screen shots below of the same behavior
						in Beta and QA.
					</Typography>
					<div className="media-cont">
						<video src={uiFlow} height="480" height="200" controls />
					</div>
					<Typography variant="h6">Same Behavior In Beta and QA</Typography>
					<Divider className="divider" />
					<div className="media-cont">
						{mockVinPaymentImages.map((image, index) => (
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
					title="Accepting Pyament with a Mock Vin"
				/>
			</Fragment>
		);
	}
}

export default MockVin;
