import React from 'react';
import { Typography, Divider } from '@material-ui/core';

const Middleware = () => (
	<div>
		<Typography variant="h6">
			The very core of this application is wrapped in middleware.
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
			In some cases, abstraction levels go 5 functions deep. The top layer calls a secondary layer,
			which then calls a tertiary layer, etc.
			<br />
			<br />
			This is a great deal of overhead, and increases time needed for maintance or revisions. The
			biggest problem is that there is a{' '}
			<strong className="code-block">single point of failure.</strong>
		</Typography>

		<Typography variant="h6" className="spacer">
			Potential Solutions
		</Typography>
		<Typography variant="body1" className="spacer bottom-spacer">
			Decounstruct the middleware piece by piece. Lambdas should be completely independent micro
			services. Introducing this single point of failure defeats the intent.
		</Typography>
	</div>
);

export default Middleware;
