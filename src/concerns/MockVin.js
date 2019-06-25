import React from 'react';
import { Typography, Divider } from '@material-ui/core';
const uiFlow = require('../assets/videos/mock-payment.mov');

const MockVin = () => (
	<div>
		<Typography variant="h6">
			You can currently send a payment for a mock vin. Your payment will be taken, and no policy
			will be given in return.
		</Typography>
		<Divider className="divider" />
		<Typography variant="body1" className="spacer bottom-spacer">
			When going through the application, a user can get a mock vin for the purposes of quoting.
			Payment will be accepted for this mock vin, but the policy will be denied due to the mock vin.
			<Typography variant="body1" className="bottom-spacer" />
		</Typography>
		<Typography variant="h6" className="spacer">
			Room to Improve
		</Typography>
		<Typography variant="body1" className="spacer bottom-spacer">
			The way forward could include implementing a 3 way handshake, in which a temporary policy is
			created and reserved for the user utilizing the mock vin.
			<br />
			<br />
			The user is then prompted to input the valid vin of the car they wish to purchase a product
			for.
			<br />
			<br />
			After validating the real VIN, the users stored policy will be granted, pending successful
			payment.
		</Typography>
		<div>
			<Typography variant="h6">Example of a Payment Going Through with a Mock Vin</Typography>
		</div>
		<Divider className="divider" />

		<div className="media-cont">
			<video src={uiFlow} height="480" height="200" controls />
		</div>
	</div>
);

export default MockVin;
