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
			Without a clear understanding, in tandem with laid out expectations, we cannot give a valid
			solution to a lot of the problems we are facing.
			<br />
		</Typography>
		<Typography variant="h6" className="spacer">
			Potential Solutions
		</Typography>
		<Typography variant="body1" className="spacer bottom-spacer">
			We understand that things are constantly changing. We want to do our best in facilitating the
			release of this product, while simultaneously protecting ourselves from future turmoil due to
			negligence at this stage in development.
			<br />
			<br />
			Even just a direction to go in, rather than a specific destination is incredibly useful. We
			are sitting 0 understanding, any direction could be beneficial. It helps us infer best we can,
			and empowers us to make development descions that foster profit.
		</Typography>
	</div>
);

export default BusinessReqs;
