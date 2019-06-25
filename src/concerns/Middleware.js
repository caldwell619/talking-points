import React from 'react';
import { Typography, Divider } from '@material-ui/core';

const Middleware = () => (
	<div>
		<Typography variant="h6">
			The very core of this application is wrapped in middleware.
		</Typography>
		<Divider className="divider" />
		<Typography variant="body1" className="bottom-spacer">
			An anti-pattern is:
			<blockquote cite="https://www.simform.com/serverless-antipatterns/">
				<em>
					"... just like a pattern, except that instead of a solution it gives something that looks
					superficially like a solution but isn’t one"
				</em>
				<footer>
					—{' '}
					<a
						href="http://www.informit.com/authors/bio/50d7e43c-64d1-4200-916c-c8b29e712877"
						target="_blank"
						rel="noreferrer noopener"
					>
						Andrew Koenig
					</a>
				</footer>
			</blockquote>
			
		</Typography>
		<Typography variant="h6" className="spacer">
			Why This Needs Attention
		</Typography>
		<Typography variant="body1" className="spacer bottom-spacer">
			All of these functions are abstractions, coupled with increased complexity.
			<br />
			<br />
			In some cases, abstraction levels go <span className="code-block">5 functions deep</span>. The
			top layer calls a secondary layer, which then calls a tertiary layer, etc.
			<br />
			<br />
			This is a great deal of overhead, and increases time needed for maintance or revisions. There
			is also a <strong className="code-block">single point of failure.</strong>
			<br />
			<br />
		</Typography>

		<Typography variant="h6" className="spacer">
			Room for Improvement
		</Typography>
		<Typography variant="body1" className="spacer bottom-spacer">
			The intent on using a serverless approach with AWS is that all of the resources are completely
			independent micro services. Introducing this single point of failure defeats the intent.
		</Typography>
	</div>
);

export default Middleware;
