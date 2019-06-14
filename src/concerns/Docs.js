import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import DropDown from '../util/DropDown';

const Docs = () => (
	<div>
		<Typography variant="h6">
			Our primary concern is that accepting a product that has broken Lambdas
			accrues a great deal of technical debt.
		</Typography>
		<Divider className="divider" />
		<Typography variant="body1" className="bottom-spacer" />
		<Typography variant="h6" className="spacer">
			The Problem
		</Typography>
		<Typography variant="body1" className="spacer bottom-spacer">
			By accepting Lambdas that are broken / unrelated to the product, you
			assume technical debt that will require dev time to fix. <br />
			Starting off the release with technical debt spells doom for the future.
			<br />
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

export default Docs;
