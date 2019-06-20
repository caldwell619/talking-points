import React, { Fragment } from 'react';
import Link from 'react-router-dom/Link';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
	nested: {
		paddingLeft: theme.spacing(4)
	}
}));

const NavListItems = ({ navItems, disablePadding }) => {
	const classes = useStyles();
	return (
		<Fragment>
			{navItems.map(({ link, icon, linkText }) => (
				<Link to={link} key={link}>
					<ListItem button className={disablePadding ? classes.nested : ''}>
						<ListItemIcon>{icon}</ListItemIcon>
						<ListItemText primary={linkText} />
					</ListItem>
				</Link>
			))}
		</Fragment>
	);
};

NavListItems.propTypes = {
	navItems: PropTypes.arrayOf(PropTypes.object),
	disablePadding: PropTypes.bool
};

export default NavListItems;
