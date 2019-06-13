import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Page from '../content/Page';
import {
	docsContent,
	authContent,
	communicationContent,
	middlewareContent,
	businessContent
} from '../static/content';
import AccessPatterns from '../concerns/AccessPatterns';
import BrokenEndpoints from '../concerns/BrokenEndpoints';
import Ux from '../concerns/Ux';
import Main from '../content/Main';
import '../css/Conerns.css';

const Router = props => {
	return (
		<Switch>
			<Route
				path="/auth"
				render={routeProps => <Page content={authContent} title="Auth Flow" />}
			/>
			<Route
				path="/middleware"
				render={routeProps => (
					<Page
						content={middlewareContent}
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
				path="/broken"
				render={routeProps => (
					<Page content={BrokenEndpoints} title="Broken Lambdas" />
				)}
			/>
			<Route
				path="/comms"
				render={routeProps => (
					<Page
						content={communicationContent}
						title="Consistent Communication"
					/>
				)}
			/>
			<Route
				path="/access"
				render={routeProps => (
					<Page content={AccessPatterns} title="Future Access Patterns" />
				)}
			/>
			<Route
				path="/business-needs"
				render={routeProps => (
					<Page content={businessContent} title="Business Requirements" />
				)}
			/>
			<Route
				path="/ux"
				render={routeProps => <Page content={Ux} title="UX Snags" />}
			/>
			<Route path="/" render={routeProps => <Main />} />
		</Switch>
	);
};

export default Router;
