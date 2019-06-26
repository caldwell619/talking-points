import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import DropDown from '../util/DropDown';

const Docs = () => (
	<div>
		<Typography variant="h6">We have recieved no documentation on any of the code.</Typography>
		<Divider className="divider" />
		<Typography variant="body1" className="bottom-spacer" />
		<Typography variant="h6" className="spacer">
			Why This Warrants Attention
		</Typography>
		<Typography variant="body1" className="spacer bottom-spacer">
			We have had to reverse engineer this application and write our own documentation for the
			product provided by a 3rd party vendor / consultant. Our assumptions and inferences could be
			incorrect.
		</Typography>
		<Typography variant="h6" className="spacer">
			Room for Improvement
		</Typography>
		<Typography variant="body1" className="spacer bottom-spacer">
			We have already started writing our own documentation, and writing tests based on the result.
			Even just an open channel of communication with a source that has insight would be very
			helpful.
		</Typography>
		<Typography variant="h6" className="spacer">
			Status of our Own Docs
		</Typography>
		<Typography variant="body1" className="spacer bottom-spacer">
			We have started a collection of documentation based on the code provided.
			<br />
			<br />
			<a href="https://google.com" target="_blank" rel="noreferrer noopener" className="blue-link">
				Here
			</a>{' '}
			is a link to the progress we have made so far.
			<ul>
				<li>We have mapped every available endpoint</li>
				<li>Presented the required fields of each request on AWS</li>
				<li>Given a sample response, sample request when applicable</li>
				<li>Documented the configuration for each API Gateway endpoint</li>
			</ul>
		</Typography>
	</div>
);

export default Docs;
