import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import DropDown from '../util/DropDown';

const Communication = () => (
	<div>
		<Typography variant="h6">
			Our primary concern is that clear needs have not been defined.
		</Typography>
		<Divider className="divider" />
		<Typography variant="body1" className="bottom-spacer">
			We don't need an official document, just concrete words on what the
			intended functionality of this application is, so we can collectively
			brainstorm a solution.
		</Typography>
		<Typography variant="h6" className="spacer">
			The Problem
		</Typography>
		<Typography variant="body1" className="spacer bottom-spacer">
			Without clear, concise, and consistent communication, we cannot leverage experience and know
		</Typography>
		<Typography variant="h6" className="spacer">
			Potential Solutions
		</Typography>
		<Typography variant="body1" className="spacer bottom-spacer">
			Moving forward, the solution would be to prune the Lambdas that are not
			relevant to the project, and fix the ones that are.
			<br />
		</Typography>
		<div>
			<Typography variant="h6">List of Lambdas</Typography>
		</div>
		<Divider className="divider" />
	</div>
);

export default Communication;
