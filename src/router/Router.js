import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Page from '../content/Page';
import AccessPatterns from '../concerns/AccessPatterns';
import BrokenEndpoints from '../concerns/BrokenEndpoints';
import Ui from '../concerns/Ui';
import Auth from '../concerns/Auth';
import Docs from '../concerns/Docs';
import Middleware from '../concerns/Middleware';
import Main from '../content/Main';
import '../css/Conerns.css';

const Router = props => {
	return (
		<Switch>
			<Route
				path="/auth"
				render={routeProps => <Page content={<Auth />} title="Service Availability" />}
			/>
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
				render={routeProps => <Page content={<BrokenEndpoints />} title="Legacy Code" />}
			/>
			<Route
				path="/access"
				render={routeProps => <Page content={<AccessPatterns />} title="Future Access Patterns" />}
			/>

			<Route path="/ui" render={routeProps => <Page content={<Ui />} title="UI Improvements" />} />

			<Route path="/" render={routeProps => <Main />} />
		</Switch>
	);
};

export default Router;
