import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const HeaderItem = ({ link, icon, linkText }) => {
	return (
		<Link to={link}>
			<ListItem button>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText primary={linkText} />
			</ListItem>
		</Link>
	);
};

HeaderItem.propTypes = {
	icon: PropTypes.element,
	linkText: PropTypes.string,
	link: PropTypes.string
};

export default HeaderItem;
