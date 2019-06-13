import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import InputValidation from './ux-demo/InputValidation';
import Responsiveness from './ux-demo/Responsiveness';

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

export default function Ux() {
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
					<Tab label="Reset Password" />
					<Tab label="Resume Quote" />
					<Tab label="Seeing Purchases" />
					<Tab label="Editing Details" />
					<Tab label="Input Validation" />
					<Tab label="Responsiveness" />
				</Tabs>
			</AppBar>
			{value === 0 && <TabContainer>Item One</TabContainer>}
			{value === 1 && <TabContainer>Item Two</TabContainer>}
			{value === 2 && <TabContainer>Item Three</TabContainer>}
			{value === 3 && <TabContainer>Item Four</TabContainer>}
			{value === 4 && (
				<TabContainer>
					<InputValidation />
				</TabContainer>
			)}
			{value === 5 && (
				<TabContainer>
					<Responsiveness />
				</TabContainer>
			)}
		</div>
	);
}
