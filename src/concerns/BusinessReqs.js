import React from 'react';
import { Typography, Divider } from '@material-ui/core';

const BusinessReqs = () => (
	<div>
		<Typography variant="h6">
			We do not have a clear understanding of what this app is supposed to do.
		</Typography>
		<Divider className="divider" />
		<Typography variant="body1" className="bottom-spacer" />
		<Typography variant="h6" className="spacer">
			The Problem
		</Typography>
		<Typography variant="body1" className="spacer bottom-spacer">
			Without a clear understanding, in tandem with laid out expectations, we
			cannot give a valid solution to a lot of the problems we are facing.
			<br />
		</Typography>
		<Typography variant="h6" className="spacer">
			Potential Solutions
		</Typography>
		<Typography variant="body1" className="spacer bottom-spacer">
			
			<br />
		</Typography>
	</div>
);

export default BusinessReqs;
