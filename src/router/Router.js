import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Page from '../content/Page';
import DataFlexibility from '../concerns/DataFlexibility';
import LegacyCode from '../concerns/LegacyCode';
import Ui from '../concerns/Ui';
import ServiceAvailability from '../concerns/ServiceAvailability';
import MockVin from '../concerns/MockVin';
import Docs from '../concerns/Docs';
import Middleware from '../concerns/Middleware';
import Main from '../content/Main';
import '../css/Conerns.css';

const Router = props => {
	return (
		<Switch>
			<Route
				path="/auth"
				render={() => <Page content={<ServiceAvailability />} title="Service Availability" />}
			/>
			<Route
				path="/mock-vin"
				render={() => <Page content={<MockVin />} title="Payments Going Through with a Mock Vin" />}
			/>
			<Route
				path="/middleware"
				render={() => <Page content={<Middleware />} title="Middleware at a Foundational Level" />}
			/>
			<Route
				path="/docs"
				render={() => <Page content={<Docs />} title="Existing Documentation" />}
			/>
			<Route path="/broken" render={() => <Page content={<LegacyCode />} title="Legacy Code" />} />
			<Route
				path="/access"
				render={() => <Page content={<DataFlexibility />} title="Flexibility to Grow" />}
			/>

			<Route path="/ui" render={() => <Page content={<Ui />} title="UI Improvements" />} />

			<Route path="/" render={() => <Main />} />
		</Switch>
	);
};

export default Router;
