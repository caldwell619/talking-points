import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import DropDown from '../util/DropDown';
import { strict } from 'assert';

const Middleware = () => (
	<div>
		<Typography variant="h6">
			The very core of this application is wrapped in middleware. Helper functions that are designed
			to be used in multiple places to shorten code length, and dev time.
		</Typography>
		<Divider className="divider" />
		<Typography variant="body1" className="bottom-spacer" />
		<Typography variant="h6" className="spacer">
			The Problem
		</Typography>
		<Typography variant="body1" className="spacer bottom-spacer">
			All of these functions are abstractions, coupled with increased complexity.
			<br />
			<br />
			Without any guidance, we would have to infer what these functions are doing. In some cases,
			abstraction levels go 5 functions deep. The top layer calls a secondary layer, which then
			calls a tertiary layer, etc.
			<br />
			<br />
			This is a great deal of overhead, and increases time needed for maintance or revisions. The
			biggest problem is that your introduce a{' '}
			<strong className="code-block">single point of failure</strong>
		</Typography>
		<Typography variant="h6" className="spacer">
			Potential Solutions
		</Typography>
		<Typography variant="body1" className="spacer bottom-spacer">
			At the very least, an basic understanding of the intent of each helper function. If we know
			what they do, we can try to reason about fixing potential issues.
			<br />
			<br />
			Lambdas should be completely independent micro services. Introducing this single point of
			failure defeats the intent.
		</Typography>
	</div>
);

export default Middleware;
