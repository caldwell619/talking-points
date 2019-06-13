import React, { Component } from 'react';
import '../../css/Conerns.css';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
const validate1 = require('../../assets/videos/validate-1.mov');
const validate2 = require('../../assets/videos/validate-2.mov');
const validate3 = require('../../assets/videos/validate-3.mov');

class InputValidation extends Component {
	state = {
		isVideoShown: false
	};
	render() {
		return (
			<div>
				<Typography variant="h6">
					In several instances, there is no validation before sending a request
					to the API.
				</Typography>
				<Typography variant="body1" className="bottom-spacer">
					This is the result of lazy development. Several established tools are
					available to ensure that input is validated at a basic level. <br />
					<br />
					<a
						href="https://baianat.github.io/vee-validate/"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: 'blue' }}
					>
						Vee Validate
					</a>
					&nbsp;is in use for Bacon Loan Pay to enforce rudamentary validation
					of input before wasting resources with an API that is doomed to fail.
				</Typography>
				<div>
					<Typography variant="h6" className="bottom-spacer">
						Examples
					</Typography>
				</div>
				<div className="media-cont">
					<video src={validate1} width="480" controls />;
					<video src={validate2} width="480" controls />;
					<video src={validate3} width="480" controls />;
				</div>
			</div>
		);
	}
}

InputValidation.propTypes = {};

export default InputValidation;
