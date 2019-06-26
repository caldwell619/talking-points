import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import InputValidation from './ux-demo/InputValidation';
import NativeAlerts from './ux-demo/NativeAlerts';
import Responsiveness from './ux-demo/Responsiveness';
import UnsupportedBrowsers from './ux-demo/UnsupporterBrowsers';
import WalkThrough from './ux-demo/WalkThrough';

function TabContainer(props) {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired
};

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		backgroundColor: theme.palette.background.paper
	}
}));

export default function Ui() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	function handleChange(event, newValue) {
		setValue(newValue);
	}

	return (
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="primary"
					textColor="primary"
					variant="scrollable"
					scrollButtons="auto"
				>
					<Tab label="Input Validation" />
					<Tab label="Responsiveness" />
					<Tab label="Native Alerts" />
					<Tab label="Unsupported Browsers" />
					<Tab label="Full Walk Through" />
				</Tabs>
			</AppBar>
			{value === 0 && (
				<TabContainer>
					<InputValidation />
				</TabContainer>
			)}
			{value === 1 && (
				<TabContainer>
					<Responsiveness />
				</TabContainer>
			)}
			{value === 2 && (
				<TabContainer>
					<NativeAlerts />
				</TabContainer>
			)}
			{value === 3 && (
				<TabContainer>
					<UnsupportedBrowsers />
				</TabContainer>
			)}
			{value === 4 && (
				<TabContainer>
					<WalkThrough />
				</TabContainer>
			)}
		</div>
	);
}
