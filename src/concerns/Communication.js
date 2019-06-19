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
			We don't need an official document, just concrete words on what the intended functionality of
			this application is, so we can collectively brainstorm a solution.
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
			If clear guidelines cannot be given, we will do our best to infer what that might entail. This
			will lead to crossed wires, and expectations potentially not being met
		</Typography>
	</div>
);

export default Communication;
