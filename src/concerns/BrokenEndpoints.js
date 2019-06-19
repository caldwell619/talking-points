import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import DropDown from '../util/DropDown';

const BrokenEndpoints = () => (
	<div>
		<Typography variant="h6">
			Our primary concern is that accepting a product that has broken Lambdas accrues a great deal
			of technical debt.
		</Typography>
		<Divider className="divider" />

		<Typography variant="h6" className="spacer">
			The Problem
		</Typography>
		<Typography variant="body1" className="spacer bottom-spacer">
			By accepting Lambdas that are broken / unrelated to the product, you assume technical debt
			that will require dev time to fix. <br />
			Starting off the release with technical debt spells doom for the future.
			<br />
		</Typography>
		<Typography variant="h6" className="spacer">
			Potential Solutions
		</Typography>
		<Typography variant="body1" className="spacer bottom-spacer">
			Moving forward, the solution would be to prune the Lambdas that are not relevant to the
			project, and fix the ones that are.
		</Typography>
		<div>
			<Typography variant="h6">List of Lambdas</Typography>
		</div>
		<Divider className="divider" />
		<div>
			<DropDown title="Password Reset Request" content={() => content(passwordError)} />
			<DropDown title="Compound" content={() => content(compoundError)} />
			<DropDown title="Bank Routing" content={() => content(routingError)} />
		</div>
	</div>
);

export default BrokenEndpoints;

const compoundError =
	"TypeError: Cannot read property 'authorization' of undefined at exports.handler(/var/task / index.js: 17: 31)";
const passwordError =
	'User: arn: aws: sts::988009383230: assumed - role / marketplace - development - r - UtilityGetBankInfoLambda - YJVR6PE85QRA / marketplace - development - lambda - UtilityGetBankInfo - 3LX7ERI7HXGN is not authorized to perform: secretsmanager: GetSecretValue on resource: arn: aws: secretsmanager: us - east - 1: 988009383230: secret: TokenAuthSecret - OIOr2d';
const routingError =
	"Lambda execution failed with status 200 due to customer function error: Handler 'handler' missing on module 'index'";
const content = errorMessage => (
	<div>
		<Typography variant="subtitle2">Error Message:</Typography>
		<Typography variant="body1">
			<code>{errorMessage}</code>
		</Typography>
	</div>
);
