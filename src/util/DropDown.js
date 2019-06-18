import React from 'react';
import PropTypes from 'prop-types';
import {
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails,
	Typography
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const DropDown = ({ title, content }) => {
	return (
		<ExpansionPanel>
			<ExpansionPanelSummary
				expandIcon={<ExpandMore />}
				aria-controls="panel1a-content"
				id="panel1a-header"
			>
				<Typography>{title}</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>{content()}</ExpansionPanelDetails>
		</ExpansionPanel>
	);
};

DropDown.propTypes = {
	title: PropTypes.string,
	content: PropTypes.func
};

export default DropDown;
