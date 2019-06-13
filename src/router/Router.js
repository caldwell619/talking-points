import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Page from '../content/Page';
import { docsContent } from '../static/content';

const Router = props => {
	return (
		<Switch>
			<Route
				path="/auth"
				render={routeProps => <Page content={docsContent} title="Auth Flow" />}
			/>
			<Route
				path="/middleware"
				render={routeProps => (
					<Page
						content={docsContent}
						title="Middleware at a Foundational Level"
					/>
				)}
			/>
			<Route
				path="/docs"
				render={routeProps => (
					<Page content={docsContent} title="Existing Documentation" />
				)}
			/>
			<Route
				path="/comms"
				render={routeProps => (
					<Page content={docsContent} title="Consistent Communication" />
				)}
			/>
			<Route
				path="/access"
				render={routeProps => (
					<Page content={docsContent} title="Future Access Patterns" />
				)}
			/>
			<Route
				path="/business-needs"
				render={routeProps => (
					<Page content={docsContent} title="Business Requirements" />
				)}
			/>
		</Switch>
	);
};

export default Router;
