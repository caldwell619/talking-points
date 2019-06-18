import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Page from '../content/Page';
import AccessPatterns from '../concerns/AccessPatterns';
import BrokenEndpoints from '../concerns/BrokenEndpoints';
import Ux from '../concerns/Ux';
import BusinessReqs from '../concerns/BusinessReqs';
import Auth from '../concerns/Auth';
import Docs from '../concerns/Docs';
import Communication from '../concerns/Communication';
import Middleware from '../concerns/Middleware';
import FollowThrough from '../concerns/follow-through/FollowThrough';
import Main from '../content/Main';
import '../css/Conerns.css';

const Router = props => {
	return (
		<Switch>
			<Route path="/auth" render={routeProps => <Page content={<Auth />} title="Auth Flow" />} />
			<Route
				path="/middleware"
				render={routeProps => (
					<Page content={<Middleware />} title="Middleware at a Foundational Level" />
				)}
			/>
			<Route
				path="/docs"
				render={routeProps => <Page content={<Docs />} title="Existing Documentation" />}
			/>
			<Route
				path="/broken"
				render={routeProps => <Page content={<BrokenEndpoints />} title="Broken Lambdas" />}
			/>
			<Route
				path="/comms"
				render={routeProps => <Page content={<Communication />} title="Consistent Communication" />}
			/>
			<Route
				path="/access"
				render={routeProps => <Page content={<AccessPatterns />} title="Future Access Patterns" />}
			/>
			<Route
				path="/business-needs"
				render={routeProps => <Page content={<BusinessReqs />} title="Business Requirements" />}
			/>
			<Route path="/ux" render={routeProps => <Page content={<Ux />} title="UX Snags" />} />
			<Route
				path="/follow-through"
				render={routeProps => <Page content={<FollowThrough />} title="Follow Through" />}
			/>
			<Route path="/" render={routeProps => <Main />} />
		</Switch>
	);
};

export default Router;
