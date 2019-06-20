import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import NavListItems from './NavListItems';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper
	},
	nested: {
		paddingLeft: theme.spacing(4)
	}
}));

const NestedNavList = ({ topLevelText, nestedNavItems, primaryIcon }) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleClick = async () => {
		await setOpen(!open);
		setTimeout(() => {
			setOpen(false);
		}, 10000);
	};

	return (
		<List component="div" className={`${classes.root} nested-nav-top`} disablePadding>
			<ListItem button onClick={handleClick}>
				<ListItemIcon>{primaryIcon}</ListItemIcon>
				<ListItemText primary={topLevelText} />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<NavListItems navItems={nestedNavItems} disablePadding={true} />
			</Collapse>
		</List>
	);
};

NestedNavList.propTypes = {
	topLevelText: PropTypes.string,
	nestedNavItems: PropTypes.arrayOf(PropTypes.object),
	primaryIcon: PropTypes.element
};

export default NestedNavList;
