import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import DropDown from '../util/DropDown';

const Docs = () => (
	<div>
		<Typography variant="h6">
			We have recieved no documentation on any of the code, the intent, the business requirements,
			etc
		</Typography>
		<Divider className="divider" />
		<Typography variant="body1" className="bottom-spacer" />
		<Typography variant="h6" className="spacer">
			The Problem
		</Typography>
		<Typography variant="body1" className="spacer bottom-spacer">
			Without a clear understanding of what the intent, functionality, or purpose is behind the
			code, it is difficult to infer what may or may not be wrong. We have had to reverse engineer
			this application and write our own documentation for the product provided by a 3rd party
			vendor / consultant.
		</Typography>
		<Typography variant="h6" className="spacer">
			Potential Solutions
		</Typography>
		<Typography variant="body1" className="spacer bottom-spacer">
			We have already started writing our own documentation, and writing tests based on the result.
			Even just an open channel of communication with a source that has insight would be very
			helpful
		</Typography>
		<Typography variant="h6" className="spacer">
			Status of our Own Docs
		</Typography>
		<Typography variant="body1" className="spacer bottom-spacer">
			We have mapped every available endpoint, given a sample response, sample request when
			applicable, and documented the swagger configuration for each API Gateway endpoint.s
		</Typography>
	</div>
);

export default Docs;
